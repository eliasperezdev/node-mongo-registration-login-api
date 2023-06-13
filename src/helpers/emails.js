import nodemailer from "nodemailer"

export const registerEmail = async (data) => {
    const {email, name, token} = data

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      //Inf del email
      const info = await transport .sendMail({
          from: '"Elias" <correo@correo.com>',
          to: email,
          subject:"Valida tu cuenta",
          html: `<p> Hola : ${nombre} Comprueba tu cuenta</p>
          <p> Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace </p>          
          <a href="${process.env.FRONTEND_URL}/check/${token}"> Comprobar cuenta </a>

          <p>Si no creaste esta cuenta, puedes ignorar el mensaje </p>
          `

      })
}