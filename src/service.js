const data = require("./MOCK_DATA.json");

/**
 *  Creamos esta capa de servicio para obtener los datos, creamos el objeto que puede ser exportado
 *  para luego obtenerlo desde el index
 */

module.exports = {
  //esto nos dice que service.js es un modulo que puede ser exportado

  getUsers: () => data,
  getUserById: (id) => {
    let idNumerico = Number(id);
    let user = data.filter((persona) => persona.id === idNumerico)[0];
    /*  
            recorremos todo el arreglo 'data' con la variable
            persona, y retornamos aquella que coincide
        */
    return user;
  },
  createUser: (user) => {
    let newUser = {
      id: data.length + 1,
      ...user,
    };
    data.push(newUser);
    return newUser;
  },
  updateUser: (id, user) => {
    let idNumerico = Number(id);
    let newUser = {};
    data.forEach((element) => {
      if (element.id == idNumerico) {

        newUser = {
          id: idNumerico,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        };
        data[idNumerico - 1] = newUser; 
      }
    });
    return newUser;
  },
  deleteUser: (id) => {
    let idNumerico = Number(id);
    data.splice(idNumerico-1,1);
  },


};
