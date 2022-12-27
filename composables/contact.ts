export const useContact = () => {
  const getForm = async () => {
    await $fetch('/api/contact', {
      method: 'get',
    })
    return 'testing get request'
  }
  const sendContactForm = async (form: any, html?: string) => {
    if (!form) return
    await $fetch('/api/contact', {
      method: 'post',
      body: { ...form, html },
    })
  }

  return { sendContactForm, getForm }
}
