import { createTransport, getTestMessageUrl } from 'nodemailer'
import type { TransportOptions, SentMessageInfo } from 'nodemailer'
import { mailTemplateFooter, mailTemplateHead } from '@/utils/mailTemplate'

// import validator from 'validator';
const config = useRuntimeConfig()

const transporter = createTransport({
  host: config.MAILHOST,
  port: config.MAILPORT,
  auth: {
    user: config.MAILUSER,
    pass: config.MAILPASSWORD,
  },
} as TransportOptions)

export default defineEventHandler(async (e) => {
  const { method } = e.node.req
  if (method === 'GET') {
    console.log('...get request')
    return 'Testing...'
  }
  if (method === 'POST') {
    const body = await readBody(e)

    const mailOptions = {
      from: `"${body.name}" <${body.email}>`,
      to: config.CONTACTMAIL,
      subject: `${body.appName ? body.appName : 'Elite Solar Solutions'} |
       Enquiry Details`,
      text: body.message,
      html: `${mailTemplateHead}${body.html}${mailTemplateFooter}`,
    }

    // console.log(mailOptions)

    const mailToOptions = {
      from: `"Kathirr007" <${config.CONTACTMAIL}>`,
      to: `"${body.name}" <${body.email}>`,
      subject: `Thank you | ${
        body.appName ? body.appName : 'Elite Solar Solutions'
      }`,
      text: 'Thank you for contacting us',
      html: 'Thank you for contacting us',
    }

    const EmailSendError = createError({
      statusCode: 400,
      statusMessage: `Can't able to send email`,
      data: {},
    })

    transporter.sendMail(mailOptions, function (err, res) {
      if (err) {
        console.log(err)
        sendError(e, EmailSendError)
      } else {
        console.log(`Email has been sent Successfully`)
        if (body.email) {
          transporter.sendMail(mailToOptions, function (err, res) {
            if (err) {
              console.log(err)
              sendError(e, EmailSendError)
            } else {
              console.log(`Email to the user has been sent Successfully`)
              return `Email to the user has been sent Successfully`
            }
          })
        }
        return `Email has been sent Successfully`
      }
    })

    return {}
  }
})
