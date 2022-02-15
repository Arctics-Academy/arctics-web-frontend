const sortById = (a, b) => {
    if (a.id > b.id) return -1
    else return 1
}

const sortByAmount = (a, b) => {
    if (a.amount > b.amount) return -1
    else return 1
}

const sortByPaytime = (a, b) => {
    if (a.paytime > b.paytime) return -1
    else return 1
}

const sortByConsultime = (a, b) => {
    if (a.consultime > b.consultime) return -1
    else return 1
}

const sortByPayStatus = (a, b) => {
    switch (a.paystatus) {
        case '已提領':
            return 1
        case '未付款':
            return -1
        case '未提領':
            if (b.paystatus === '已提領') return -1
            else return 1
        default:
            return 0
    }
}

const sortByIdReverse = (a, b) => {
    if (a.id > b.id) return 1
    else return -1
}

const sortByAmountReverse = (a, b) => {
    if (a.amount > b.amount) return 1
    else return -1
}

const sortByPaytimeReverse = (a, b) => {
    if (a.paytime > b.paytime) return 1
    else return -1
}

const sortByConsultimeReverse = (a, b) => {
    if (a.consultime > b.consultime) return 1
    else return -1
}

const sortByPayStatusReverse = (a, b) => {
    switch (a.paystatus) {
        case '已提領':
            return -1
        case '未付款':
            return 1
        case '未提領':
            if (b.paystatus === '已提領') return 1
            else return -1
        default:
            return 0
    }
}

const getSortedList = (target, list) => {
    switch (target) {
        case 'id':
            list.sort(sortById)
            return list
        case 'amount':
            list.sort(sortByAmount)
            return list
        case 'paytime':
            list.sort(sortByPaytime)
            return list
        case 'consultime':
            list.sort(sortByConsultime)
            return list
        case 'paystatus':
            list.sort(sortByPayStatus)
            return list
        case 'id-r':
            list.sort(sortByIdReverse)
            return list
        case 'amount-r':
            list.sort(sortByAmountReverse)
            return list
        case 'paytime-r':
            list.sort(sortByPaytimeReverse)
            return list
        case 'consultime-r':
            list.sort(sortByConsultimeReverse)
            return list
        case 'paystatus-r':
            list.sort(sortByPayStatusReverse)
            return list
        default:
            return list
    }
}

export { getSortedList }