import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

const getResetPasswordEmailOtp = async (payload) => {
  // req.body
  // {
  //     identity: "string"
  //     email: "string"
  // }
  try {
    const { data: { status, message, code } } = await instance.post('/api/user/reset-password/send-otp', payload)
    console.debug('getResetPasswordEmailOtp()', status, message)
    return { status, message, code }
  }
  catch (e) {
    console.debug('getResetPasswordEmailOtp()', e)
    return { status: 'error', message: `getResetPasswordEmailOtp(): ${e}` }
  }
}

const matchResetPasswordEmailOtp = async (payload) => {
  // req.body
  // {
  //     identity: "string"
  //     email: "string"
  //     otp: "string"
  //     password: "string"
  // }
  try {
    const { data: { status, message, code } } = await instance.post('/api/user/reset-password/match-otp', payload)
    console.debug('matchResetPasswordEmailOtp()', status, message)
    return { status, message, code }
  }
  catch (e) {
    console.debug('matchResetPasswordEmailOtp()', e)
    return { status: 'error', message: `matchResetPasswordEmailOtp(): ${e}` }
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { getResetPasswordEmailOtp, matchResetPasswordEmailOtp }