import { createTransport, getTestMessageUrl } from 'nodemailer'
import type { TransportOptions, SentMessageInfo } from 'nodemailer'
import { mailTemplateFooter, mailTemplateHead } from '@/utils/mailTemplate'

// import validator from 'validator';
const config = useRuntimeConfig()
const isProd = process.env.NODE_ENV === 'production'

const transporter = createTransport({
  host: isProd ? process.env.MAILHOST : config.MAILHOST,
  port: isProd ? process.env.MAILPORT : config.MAILPORT,
  auth: {
    user: isProd ? process.env.MAILUSER : config.MAILUSER,
    pass: isProd ? process.env.MAILPASSWORD : config.MAILPASSWORD,
  },
} as TransportOptions)

const EmailSendError = createError({
  statusCode: 400,
  statusMessage: `Can't able to send email`,
  data: {},
})

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
      to: isProd ? process.env.CONTACTMAIL : config.CONTACTMAIL,
      subject: `${body.appName ? body.appName : 'Elite Solar Solutions'} |
       Enquiry Details`,
      text: body.message,
      html: `${mailTemplateHead}${body.html}${mailTemplateFooter}`,
    }

    const mailToOptions = {
      from: `"Kathirr007" <${
        isProd ? process.env.CONTACTMAIL : config.CONTACTMAIL
      }>`,
      to: `"${body.name}" <${body.email}>`,
      subject: `Thank you | ${
        body.appName ? body.appName : 'Elite Solar Solutions'
      }`,
      text: 'Thank you for contacting us',
      html: 'Thank you for contacting us',
    }

    await sendEmail(e, mailOptions, false)
    await sendEmail(e, mailToOptions, true)

    return {}
  }
})

async function sendEmail(e: any, mailOptions: any, toUser = false) {
  try {
    const mail = await transporter.sendMail(mailOptions)
    console.log(
      `${
        toUser
          ? 'Email to the user has been sent Successfully'
          : 'Email has been sent Successfully'
      } `
    )
  } catch (error) {
    console.log(error)
    sendError(e, EmailSendError)
  }
}
