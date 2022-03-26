import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

const studentLogin = async (payload) => {
  try {
    const { data: { status, data, message } } = await instance.post('/api/user/student/login', {
      ...payload
    })

    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const studentRegister = async (payload) => {
  try {
    const { data: { status, data, message } } = await instance.post('/api/user/student/register', {
      ...payload
    })

    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const getDashboardInfo = async (payload) => {
  try {
    const { data: { status, data, message } } = await instance.post('/api/student/dashboard/get', {
      ...payload
    })

    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const getListInfo = async (payload) => {
  try {
    const { data: { status, data, message } } = await instance.post('/api/student/list/get', {
      ...payload
    })

    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const addStudentListItem = async (payload) => {
  try {
    const { data: { status, message } } = await instance.post('/api/student/list/add', {
      ...payload
    })

    return { status, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const deleteStudentListItem = async (payload) => {
  try {
    const { data: { status, message } } = await instance.post('/api/student/list/delete', {
      ...payload
    })

    return { status, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const clearStudentList = async (payload) => {
  try {
    const { data: { status, message } } = await instance.post('/api/student/list/clear', {
      ...payload
    })

    return { status, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const getAllMeetings = async (payload) => {
  try {
    const { data: { status, data, message } } = await instance.post('/api/student/meetings/get', {
      ...payload
    })

    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const getStudentProfile = async (payload) => {
  try {
    const { data: { status, data, message } } = await instance.post('/api/student/profile/get', {
      ...payload
    })

    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const updateStudentProfile = async (payload) => {
  try {
    const { data: { status, message } } = await instance.post('/api/student/profile/update', {
      ...payload
    })

    return { status, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const getStudentNotifCount = async (payload) => {
  try {
    const { data: { status, data, message} } = await instance.post('/api/student/tools/notification-count/get', {
      ...payload
    })

    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const verifyDiscountCode = async (payload) => {
  try {
    const { data: { status, message } } = await instance.post('/api/student/tools/check-discount-code/verify', {
      ...payload
    })

    return { status, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const getFilterResult = async (payload) => {
  try {
    const { data: { status, data, message } } = await instance.post('/api/student/tools/filter', {
      ...payload
    })   

    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const getConsultantProfilePreview = async (payload) => {
  try {
    const { data: { status, data, message } } = await instance.post('/api/student/tools/consultant-profile/get', {
      ...payload
    })
    
    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const studentAuthenticate = async (payload) => {
  try {
    const { data: { status, data, message } } = await instance.post('/api/system/student', {
      ...payload
    })

    return { status, data, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const sendEmailOTP = async (payload) => {
  try {
    const { data: { status, message } } = await instance.post('/api/system/student/email-otp/send', {
      ...payload
    })

    return { status, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const verifyEmailOTP = async (payload) => {
  try {
    const { data: { status, message } } = await instance.post('/api/system/student/email-otp/verify', {
      ...payload
    })

    return { status, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const sendMobileOTP = async (payload) => {
  try {
    const { data: { status, message } } = await instance.post('/api/system/student/mobile-otp/send', {
      ...payload
    })

    return { status, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

const verifyMobileOTP = async (payload) => {
  try {
    const { data: { status, message } } = await instance.post('/api/system/student/mobile-otp/verify', {
      ...payload
    })

    return { status, message }
  } catch (e) {
    return { status: 'failed', message: `Error returned: ${e}`}
  }
}

export default {
  studentLogin, studentRegister, studentAuthenticate,
  getDashboardInfo, getListInfo, addStudentListItem, deleteStudentListItem, clearStudentList, 
  getStudentProfile, updateStudentProfile,
  getAllMeetings, getStudentNotifCount, verifyDiscountCode, 
  getFilterResult, getConsultantProfilePreview,
  sendEmailOTP, sendMobileOTP, verifyEmailOTP, verifyMobileOTP
}