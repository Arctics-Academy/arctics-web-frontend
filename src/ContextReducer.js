import React, {useReducer, useState} from 'react'

export const ParamContext = React.createContext()

/* context state doc
    email: String - user email
    name: String - name
    identity: String - 'consultant', 'student', 'pending'(wait for validation)
    meetings: Object - info of loaded meetings grouped by year/month -> {year: {month: [...]}}
    furture/finished/cancelled Meetings: [Object] - meetings grouped by different status
    receipts: [Object] - info of loaded meetings
*/

const initState = {
    id: '',
    email: '',
    name: '',
    surname: '',
    identity: '',
    mobile: '',
    meetingsByTime: {},
    meetingsByStatus: {future: [], past: [], cancelled: []},
    receipts: [],
    withdrawableAmount: 0,
    withdrawedAmount: 0,
}

const sumAmount = (type, list) => {
    let sum = 0
    for (var element in list) {
        if (list[element].paystatus === type) sum += list[element].amount
    }
    return sum
}

const editProfile = (init, changes) => {
    let update = { ...init }
    for (let key in changes) {
        if (key === 'studentIdScan') continue
        update[key] = changes[key]
    }
    return update
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'register':
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                surname: action.payload.surname,
                identity: action.payload.identity,
                mobile: action.payload.mobile
            }
        case 'login':
            return {
                id: action.payload.id,
                announcement: action.payload.announcement,
                name: action.payload.profile.name,
                surname: action.payload.profile.surname,
                identity: action.payload.identity,
                mobile: action.payload.profile.mobile,
                meetingsByTime: action.payload.meetingsByTime,
                meetingsByStatus: action.payload.meetingsByStatus,
                purse: action.payload.purse,
                profile: action.payload.profile,
                notifications: action.payload.notifications,
                receipts: action.payload.receipts,
                withdrawableAmount: sumAmount('未提領', action.payload.receipts),
                withdrawedAmount: sumAmount('已提領', action.payload.receipts)
            }
        case 'editProfile':
            return {
                ...state,
                profile: editProfile(state.profile, action.payload)
            }
        case 'editTimetable':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    timetable: action.payload
                }
            }
        default:
            return state
    }
}

const ContextReducer = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const [login, setLogin] = useState(false)

    return (
        <ParamContext.Provider value={{Info: state, setInfo: dispatch, isLogin: login, setLogin: setLogin}}>
            {children}
        </ParamContext.Provider>
    )
}

export default ContextReducer