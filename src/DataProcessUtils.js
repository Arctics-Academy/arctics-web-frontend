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
    while (colIdx <= 6) {
        if (montharr[rowIdx][colIdx] === undefined) colIdx++
        if (montharr[rowIdx][colIdx].date === date) return {rowIdx, colIdx}
        else colIdx++
    }
}

const toTwoDigit = (num) => {
    if (num  <= 9) return `0${num}`
    else return `${num}`
}

const wrapDateString = (time) => {
    time = new Date(time)
    const weeday = { 0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六' }
    return `${time.getFullYear()}-${toTwoDigit((time.getMonth()+1)%12)}-${toTwoDigit(time.getDate())}（${weeday[time.getDay()]}）`
}

const wrapTimeString = (time) => {
    time = new Date(time)
    let hour = time.getHours(), min = time.getMinutes()
    if (min === 30) {
        return `${toTwoDigit(hour)}:${toTwoDigit(min)}~${toTwoDigit(hour+1)}:00`
    } else {
        return `${toTwoDigit(hour)}:${toTwoDigit(min)}~${toTwoDigit(hour)}:30`
    }
}

const getStartTimeString = (time) => {
    time = new Date(time)
    return `${toTwoDigit(time.getHours())}:${toTwoDigit(time.getMinutes())}`
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

const stringToDateObject2 = (list) => {
    let newList = []
    list.map((e) => {
        let ne = {...e}
        ne.timestamp = new Date(e.timestamp)
        newList.push(ne)
    })
    return newList
}

const retrieveDateObject = (list) => {
    let future = stringToDateObject(list.future), past = stringToDateObject(list.past), cancelled = stringToDateObject(list.cancelled)
    return { future, past, cancelled }
}

const transformStatusListIntoCalender  = (list) => {
    // list format: 
    // { 
    //     future: [{meeting detail...}...], 
    //     past:[...], 
    //     cancelled:[...] 
    // }
    const current = new Date()
    const dayDetail = { year: current.getFullYear(), month: ((current.getMonth()+1)%12), date: current.getDate() }
    let calender = {}
    let concatnated = list.future.concat(list.past.concat(list.cancelled))
    if (concatnated[0] === undefined) {
        calender[dayDetail.year] = {}
        calender[dayDetail.year][dayDetail.month-1] = buildMonthArr(dayDetail.year, dayDetail.month-1)
        calender[dayDetail.year][dayDetail.month] = buildMonthArr(dayDetail.year, dayDetail.month)
        calender[dayDetail.year][dayDetail.month+1] = buildMonthArr(dayDetail.year, dayDetail.month+1)
        return calender
    }
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

const resolveByStatus = (list, exp, type, identity) => {
    if (list[0] === undefined) return []
    let output = []
    list.map((e) => {
        let wrapped;
        if (identity === 'consultant') { 
            wrapped = {
                id: e.id,
                date : wrapDateString(e.startTimestamp), time: wrapTimeString(e.startTimestamp),
                student: e.studentName, grade: e.studentYear, exp: exp,
                content: e.studentItems, remark: e.remark
            }
        } 
        else {
            wrapped = {
                id: e.id,

                name: e.consultantName,
                school: e.consultantSchool,
                major: e.consultantMajor,
                year: e.consultantYear,
                count: e.consultantCount,
                consultantId: e.consultantId,

                date : wrapDateString(e.startTimestamp), 
                time: wrapTimeString(e.startTimestamp),
                content: e.studentItems, 
                remark: e.remark,

                startTimestamp: e.startTimestamp,
                status: e.status
            }
        }
        if (type === 'past') wrapped['feedback'] = e.comment
        output.push(wrapped)
    })

    return output
}

const resolveListData = (list, identity) => {
    const exp = list.past.length
    let future = resolveByStatus(list.future, exp, 'future', identity), past = resolveByStatus(list.past, exp, 'past', identity), cancelled = resolveByStatus(list.cancelled, exp, 'cancelled', identity)
    return { future, past, cancelled }
}

const convertBase64ForImage = (photo) => {
    /*
    const str = photo.data.toString('base64')
    return `data:${photo.type};base64,${str}`
    */
    if (photo === undefined || photo === null || photo.data === undefined || photo.type === undefined) return 'NotFound' 
    let imgEncodedString = (new Buffer(photo.data)).toString('base64')
    let srcString = `data:${photo.type};base64,${imgEncodedString}`
    return srcString
}

const resolveStudentListData = (list) => {
    let data = []
    list.consultants.map((e) => {
        const consul = {
            ...e,
            photo: convertBase64ForImage(e.photo)
        }
        data.push(consul)
    })

    return {
        consultants: data,
    }
}

const castMeetingListToRecordList = (received) => {
    // combine into full list
    let fullList = received.future.concat(received.past.concat(received.cancelled))
    // parse into record format
    let parsedList = []
    for (let idx in fullList) {
        let parsedMeeting = {
            startTimestamp: fullList[idx].startTimestamp,
            meetingId: fullList[idx].id,
            meetingStatus: fullList[idx].status,
            meetingPrice: fullList[idx].consultantPrice,
            meetingPaymentTime: (fullList[idx].paymentTime!==undefined ? wrapDateString(fullList[idx].paymentTime)+getStartTimeString(fullList[idx].paymentTime) : "-"),
            meetingDuration: (fullList[idx].startTimestamp ? wrapDateString(fullList[idx].startTimestamp)+wrapTimeString(fullList[idx].startTimestamp) : "-"),
            consultantName: fullList[idx].consultantName,
            consultantSchool: fullList[idx].consultantSchool,
            consultantMajor: fullList[idx].consultantMajor
        }
        parsedList.push(parsedMeeting)
    }
    // sort into records list
    let sortedList = (parsedList.sort(timeComp)).reverse()
    // return
    return sortedList
}

const wrapLoginData = (data, identity) => {
    const meetings = retrieveDateObject(data.meetings)
    let wrappedData = {
        id: data.id,
        announcements: data.announcements,
        meetingsByTime: transformStatusListIntoCalender(meetings),
        meetingsByStatus: resolveListData(meetings, identity),
        notifications: data.notifications,
        profile: {
            ...data.profile,
            photo: convertBase64ForImage(data.profile.photo)
        },
        purse: {
            ...data.purse,
            transactions: stringToDateObject2(data.purse.transactions)
        },
        identity: identity,
    }

    if (identity === 'student') {
        wrappedData['list'] = resolveStudentListData(data.list)
        wrappedData['meetingsByStudentRecord'] = castMeetingListToRecordList(meetings)
    }

    return wrappedData
}

const labelToTime = (label) => {
    let basicHour = 9, half = false
    if (label%2 === 0) {
        basicHour += label/2-1
        half = true
    } else basicHour += (label+1)/2-1

    return `${basicHour}:${half? '30':'00'}`
}

const timeToLabel = (time) => {
    let ppos = time.indexOf(':')
    let h = parseInt(time.substring(0, ppos)), m = parseInt(time.substring(ppos+1))
    return (m===0)? (h-9)*2+1:(h-8)*2
}

const resolveTimetable = (timetable) => {
    let checked = []
    const weeday = {0:'sun', 1:'mon', 2:'tue', 3:'wed', 4:'thu', 5:'fri', 6:'sat'}
    for (let i=0; i<7; i++) {
        timetable[i].map((t) => {
            checked.push(`${weeday[i]}${labelToTime(t)}`)
        })
    }
    return checked
}

const wrapTimetable = (timeslot) => {
    let timetable = [[], [], [], [], [], [], []]
    const weekdayMap = {'sun': 0, 'mon': 1, 'tue': 2, 'wed': 3, 'thu': 4, 'fri': 5, 'sat': 6}
    timeslot.map((t) => {
        timetable[weekdayMap[t.substring(0, 3)]].push(timeToLabel(t.substring(3)))
    })

    return timetable
}

const timeComp2 = (a, b) => {
    if (a.timestamp > b.timestamp) return -1
    else if (a.timestamp < b.timestamp) return 1
    else return 0
}

const sortTransactions = (trans) => {
    let sorted = [...trans]
    sorted.sort(timeComp2)
    return sorted
}
/*
"id": 2,
    "name": "李小蓁",
    "img":"",
    "fee": 200,
    "exp": 15,
    "education": { "school": "國立臺灣大學", "major": "外國語文學系", "year":"二年級" },
    "hashtags": ["學習歷程檔案", "筆試準備", "社團"],
    "intro": "我也不知道可以寫什麼，大概請他們寫一些諮詢風格、諮詢經歷、教學理念、簡述自己的升學歷程之類的吧？",
    "star": 4.8,
    "deleted": false
*/
const wrapFilterResult = (result) => {
    const pack = result.map((e) => {
        return {
            name: e.name || 'CLT',
            id: e.consultantId,
            fee: e.price,
            education: {
                school: e.school,
                major: e.major,
                year: e.year || ''
            },
            exp: e.count,
            intro: e.intro || '',
            img: e.photo? convertBase64ForImage(e.photo):null,
            hashtags: e.labels,
            star: e.star
        }
    })

    console.debug(pack)
    return pack
}

const wrapConsultantPreview = (data) => {
    return {
        ...data.profile,
        photo: convertBase64ForImage(data.profile.photo)
    }
}

export { 
    buildMonthArr, wrapLoginData, resolveTimetable, wrapTimetable, sortTransactions, wrapFilterResult, wrapConsultantPreview,
    wrapDateString, wrapTimeString, getStartTimeString
}