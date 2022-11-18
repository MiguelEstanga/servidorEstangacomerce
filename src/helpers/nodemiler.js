const nodemailer = require("nodemailer");


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'miguelestanga12@gmail.com', // generated ethereal user
        pass: 'axxucwbcipaatpvr'
    }
})

async function mensage(email, sujeto, token) {
    await transporter.sendMail({
        from: '"ventasmaturin 👻" <miguelestanga12@gmail.com>', // sender address
        to: email, // list of receivers
        subject: `${sujeto} ✔`, // Subject line
        html: template(sujeto , token), // html body
    });
}

function template(nombre , token ) {
    return `
    <div  
        style="
        width: 500px; 
        height:500px; 
        display:grid;  
        grid-template-column:repeact(1,1fr );   
        gap: 20px;
        justify-content: center;
        align-items: center;     
        background-color: #F1C40F;
        border-radius:5px; padding:5px">
            <img 
               width="400px"
               height="200px" 
               src="https://res.cloudinary.com/dmrkgkvpo/image/upload/v1667798763/p9lgwkyfgplergixqhkm.jpg" 
                alt="..."
                
            >
            <div class="card-body">
                <h5 class="card-title">Estangacomerce</h5>
                <p class="card-text"> Hola ${nombre} este correo de confirmacion </p>
                <p style="font-size:20 "> aqui tu token ${token}  </p>
                <a 
                    href="http://localhost:4000/VerificacionDeCuenta/${token}" 
                    style="color:#21618C; 
                    font-size:40px;" 
                    target="_black">
                        verificar
                </a>
            </div>
        </div>
    `
}

module.exports = mensage