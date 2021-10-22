const express = require('express');

const Service = require('./src/service');

const app = express();
const PORT = 3000;
app.use(express.json); //nos permite recibir datos del lado del cliente

app.get("/", (req, res) => {
    res.json({
        message: "Lista de usuarios",
        body: Service.getUsers(),
    });
});

app.post("/", (req, res) => {
    let newUser = req.body;
    /*
    *   let { body: newUser} = req; esta es otra forma, desestructuramos la REQUEST, 
    *   obteniendo BODY y dandole el nombre de newUser
    */
    let usuario = Service.createUser(newUser);
    res.json({
        message: "El usuario fue creado",
        usuario: usuario, 
    });
});


app.listen(PORT, () => console.log("Servidor escuchando en http://localhost:" + PORT));