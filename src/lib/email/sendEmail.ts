import emailjs from '@emailjs/browser';

type Data = {
    firstName: string
    lastName: string
    email: string
    message: String
}

export const sendEmail = async(data: Data)=>{
const templateParams = {
    to_name: "pbcambridge consult",
    from_name: `${data.lastName} ${data.firstName}`,
    from_email: data.email,
    message: data.message
}

return await emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string, templateParams,  process.env.NEXT_PUBLIC_EMAIL_KEY)


}


