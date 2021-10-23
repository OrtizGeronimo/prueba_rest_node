const express = require("express");

const Service = require("./src/service");

const app = express();
const PORT = 3000;
app.use(express.json()); //nos permite recibir datos del lado del cliente

app.get("/", (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: Service.getUsers(),
  });
});

app.get("/:id", (req, res) => {
  let id = req.params.id; //req.params nos devuelve un objeto con TODOS los parametros, por lo que obtenemos id
  // otra forma: let {params: {id}} = req
  let user = Service.getUserById(id);
  res.json({
    message: "Usuario " + id,
    body: user,
  });
});

app.post("/", (req, res) => {
  let newUser = req.body;
  /*
   *   let { body: newUser} = req; esta es otra forma, desestructuramos la REQUEST,
   *   obteniendo BODY y dandole el nombre de newUser
   */
  let usuario = Service.createUser(newUser);
  res.status(201).json({
    message: "El usuario fue creado",
    usuario: usuario,
  });
});

app.put("/:id", (req, res) => {
  let updatedUser = req.body;
  let id = req.params.id;
  let usuario = Service.updateUser(id, updatedUser);
  res.json({
    message: "Usuario " + id + " actualizado",
    body: usuario,
  });
});

app.delete("/:id", (req, res) => {
  Service.deleteUser(req.params.id);
  res.json({
      message: "Usuario " + req.params.id + " eliminado",
  });
});

app.listen(PORT, () =>
  console.log("Servidor escuchando en http://localhost:" + PORT)
);
