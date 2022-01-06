import axios from 'axios'

const instance = axios.create({
  baseURL: "https://arctics-web-app.herokuapp.com/"
})

const submitSubscriber = async (email) => {
  const { data: { status, message } } = await instance.post('/api/demo/subscriber-form', {
    email
  })
  console.log('email', email)
  return { status, msg: message }
}

const submitMessageForm = async (form) => {
  const { data: { status, message } } = await instance.post('/api/demo/message-form', {
    form
  })
  console.log('form', form)
  return { status, msg: message }
}

export { submitSubscriber, submitMessageForm }
