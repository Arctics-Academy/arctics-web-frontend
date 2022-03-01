import axios from 'axios'

/* demo run on landing page */
const demo = axios.create({
  baseURL: "https://arctics-web-app.herokuapp.com/"
})

const submitSubscriber = async (email) => {
  const { data: { status, message } } = await demo.post('/api/demo/subscriber-form', {
    email
  })
  console.log('email', email)
  return { status, msg: message }
}

const submitMessageForm = async (form) => {
  const { data: { status, message } } = await demo.post('/api/demo/message-form', {
    form
  })
  console.log('form', form)
  return { status, msg: message }
}

/* APIs */

const instance = axios.create({
  baseURL: "https://preview.arctics.academy/"
})

const submitConsultantRegistrationData = async (payload) => {
  const { data: { status, data, message } }  = await instance.post('/api/user/consultant/register', {
    ...payload
  })
  return { status, data, msg: message }
}

const submitConsultantLoginData = async (payload) => {
  const { data: { status, data, message } } = await instance.post('/api/user/consultant/login', {
    ...payload
  })
  return { status, data, msg: message }
}

const sendEmailOTP = async (payload) => {
  const { data: { status, message } } = await instance.post('/api/user/consultant/email-otp/send', {
    ...payload
  })
  return { status, msg: message }
}

const verifyEmailOTP = async (payload) => {
  const { data: { status, message } } = await instance.post('/api/user/consultant/email-otp/verify', {
    ...payload
  })
  return { status, msg: message }
}

const sendMobileOTP = async (payload) => {
  const { data: { status, message } } = await instance.post('/api/user/consultant/mobile-otp/send', {
    ...payload
  })
  return { status, msg: message }
}

const verifyMobileOTP = async (payload) => {
  const { data: { status, message } } = await instance.post('/api/user/consultant/mobile-otp/verify', {
    ...payload
  })
  return { status, msg: message }
}

export { submitSubscriber, submitMessageForm, 
  submitConsultantRegistrationData, submitConsultantLoginData,
  sendEmailOTP, verifyEmailOTP, sendMobileOTP, verifyMobileOTP
}
