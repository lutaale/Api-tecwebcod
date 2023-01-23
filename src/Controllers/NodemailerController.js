const nodemailer = require('nodemailer')

class NodemailerController {
    async post(req, res) {

        const { nome, email, telefone, descricao, tipoprojeto } = req.body

        //   let acoont = await nodemailer.createTestAccount()
        let transporter = await nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: "465",
            secure: false,
            auth: {
                user: 'tecwebcod@gmail.com',
                pass: 'XKzdtdynrusnfjpf'
            }
        })
        let send = await transporter.sendMail({
            from: email,
            to: 'tecwebcod@gmail.com',
            subject: `NOVA MENSAGEM DE ${email}`,
            html: `
            <div>
              <h2>🚀Mensagem do Cliente 🙂${nome}</h2>
              <p>📩${email}</p>          
              <p>📲${telefone}</p>          
              <p>💻${tipoprojeto}</p>          
              <p>📋${descricao}</p>          
            </div>
            `
        })

        return res.json(send)
    }
}

export default new NodemailerController();