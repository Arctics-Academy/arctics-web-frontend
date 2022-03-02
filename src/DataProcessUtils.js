const daysOfMonth = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}

const timeComp = (a, b) => {
    if (a.startTimestamp > b.startTimestamp) return 1
    else if (a.startTimestamp < b.startTimestamp) return -1
    else return 0
}

const buildMonthArr = (year, month) => {
    let time = new Date(year, month-1, 1)
    let firstday = time.getDay()
    let marr = [], days = daysOfMonth[month]
    if (month === 2 && ((year%4 === 0 && year%100 !== 0) || (year%400 === 0))) days = 29
    let dayCounted = 1, wday = 0;
    let e = []
    while (dayCounted <= days) {
        if (wday < firstday) {
            e.push({})
            wday++
        } else {
            if (e.length === 7) {
                marr.push(e)
                e = []
            }
            e.push({date: dayCounted, meetings: []})
            dayCounted++
        }
    }
    while (e.length < 7) {
        e.push({})
    }
    marr.push(e)
    return marr
}

const findIndex = (montharr, date) => {
    let rowIdx = 1
    while (rowIdx < montharr.length) {
        if (montharr[rowIdx][0].date <= date) rowIdx++;
        else break
    }
    rowIdx--
    let colIdx = 0;
    while (colIdx < 6) {
        if (montharr[rowIdx][colIdx] === undefined) colIdx++
        if (montharr[rowIdx][colIdx].date === date) return {rowIdx, colIdx}
        else colIdx++
    }
}

const wrapDateString = (time) => {
    const weeday = {0:'日', 1:'一', 2:'二', 3:'三', 4:'四', 5:'五', 6:'六'}
    return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()} (${weeday[time.getDay()]})`
}

const wrapTimeString = (time) => {
    let hour = time.getHours(), min = time.getMinutes()
    if (min === 30) {
        return `${hour}:${min}~${hour+1}:00`
    } else {
        return `${hour}:${min}~${hour}:30`
    }
}

const getStartTimeString = (time) => {
    return `${time.getHours()}:${time.getMinutes()}`
}

const stringToDateObject = (list) => {
    let newList = []
    list.map((e) => {
        let ne = {...e}
        ne.startTimestamp = new Date(e.startTimestamp)
        newList.push(ne)
    })
    return newList
}

const retrieveDateObject = (list) => {
    let future = stringToDateObject(list.future), past = stringToDateObject(list.past), cancelled = stringToDateObject(list.cancelled)
    return { future, past, cancelled }
}

const transformStatusListIntoCalender  = (list) => {
    //list format: { future: [{meeting detail...}...], past:[...], cancelled:[...] }
    const current = new Date()
    const dayDetail = { year: current.getFullYear(), month: current.getMonth()+1, date: current.getDate() }
    let calender = {}
    let concatnated = list.future.concat(list.past.concat(list.cancelled))
    console.log(concatnated)
    concatnated.sort(timeComp)
    let smallest = {year: concatnated[0].startTimestamp.getFullYear(), month: concatnated[0].startTimestamp.getMonth()+1}
    let largest = {year: concatnated[concatnated.length-1].startTimestamp.getFullYear(), month: concatnated[concatnated.length-1].startTimestamp.getMonth()+1}
    let iy = smallest.year, im = smallest.month
    while (iy <= largest.year) {
        if (calender[iy] === undefined) calender[iy] = {}
        if (im <= 12) {
            calender[iy][im] = buildMonthArr(iy, im)
        } else {
            im = 1
            iy++
            calender[iy][im] = buildMonthArr(iy, im)
        }
        im++
        if (iy === largest.year && im > largest.month) break
    }
    for (let i=0; i<concatnated.length; i++) {
        let y = concatnated[i].startTimestamp.getFullYear(), m = concatnated[i].startTimestamp.getMonth()+1, d = concatnated[i].startTimestamp.getDate()
        const info = findIndex(calender[y][m], d)
        const meetInfo = {
            id: concatnated[i].id, time: getStartTimeString(concatnated[i].startTimestamp), status: concatnated[i].status
        }
        calender[y][m][info.rowIdx][info.colIdx].meetings.push(meetInfo)
    }

    if (calender[dayDetail.year] === undefined) {
        calender[dayDetail.year] = {}
        calender[dayDetail.year][dayDetail.month-1] = buildMonthArr(dayDetail.year, dayDetail.month-1)
        calender[dayDetail.year][dayDetail.month] = buildMonthArr(dayDetail.year, dayDetail.month)
        calender[dayDetail.year][dayDetail.month+1] = buildMonthArr(dayDetail.year, dayDetail.month+1)
    } else {
        if (calender[dayDetail.year][dayDetail.month-1] === undefined) calender[dayDetail.year][dayDetail.month-1] = buildMonthArr(dayDetail.year, dayDetail.month-1)
        if (calender[dayDetail.year][dayDetail.month] === undefined) calender[dayDetail.year][dayDetail.month] = buildMonthArr(dayDetail.year, dayDetail.month)
        if (calender[dayDetail.year][dayDetail.month+1] === undefined) calender[dayDetail.year][dayDetail.month+1] = buildMonthArr(dayDetail.year, dayDetail.month+1)
    }

    return calender
}

const resolveByStatus = (list, exp, type) => {
    if (list[0] === undefined) return []
    let output = []
    list.map((e) => {
        const wrapped = {
            id: e.id,
            date: wrapDateString(e.startTimestamp), time: wrapTimeString(e.startTimestamp),
            student: e.studentName, grade: e.studentYear, exp: exp,
            content: e.studentItems, remark: e.remark
        }
        if (type === 'past') wrapped['feedback'] = e.comment
        output.push(wrapped)
    })

    return output
}

const resolveListData = (list) => {
    const exp = list.past.length
    let future = resolveByStatus(list.future, exp, 'future'), past = resolveByStatus(list.past, exp, 'past'), cancelled = resolveByStatus(list.cancelled, exp, 'cancelled')
    return { future, past, cancelled }
}

const wrapLoginData = (data, identity) => {
    const meetings = retrieveDateObject(data.meetings)
    const wrappedData = {
        id: data.id,
        announcement: data.announcement,
        meetingsByTime: transformStatusListIntoCalender(meetings),
        meetingsByStatus: resolveListData(meetings),
        notifications: data.notifications,
        profile: data.profile,
        purse: data.purse,
        identity: identity,
        receipts: data.purse.transactions
    }

    return wrappedData
}

export { wrapLoginData }