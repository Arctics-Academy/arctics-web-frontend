import axios from 'axios'

const instance = axios.create({
  baseURL: "https://arctics.academy/api"
})

const submitSubscriber = async (email) => {
  try {
    const { data: { status, message } } = await instance.post('/demo/subscriber-form', { email })
    return { status, msg: message }
  }
  catch (e) {
    return { status: "error", msg: e }
  }
}

const submitMessageForm = async (form) => {
  const { data: { status, message } } = await instance.post('/demo/message-form', {
    form
  })
  return { status, msg: message }
}

export { submitSubscriber, submitMessageForm }
