const nodemailer = require('nodemailer')


class NodemailerController {
    async post(req, res) {

        const { nome, email, telefone, descricao, tipoprojeto } = req.body

        //   let acoont = await nodemailer.createTestAccount()
        let transporter =  nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: "465",
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
              <h2>πMensagem do Cliente π${nome}</h2>
              <p>π©${email}</p>          
              <p>π²${telefone}</p>          
              <p>π»${tipoprojeto}</p>          
              <p>π${descricao}</p>          
            </div>
            `
        })

        return res.json(send)
    }
}

export default new NodemailerController();