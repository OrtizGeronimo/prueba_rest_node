const data = require('./MOCK_DATA.json');

/**
 *  Creamos esta capa de servicio para obtener los datos, creamos el objeto que puede ser exportado
 *  para luego obtenerlo desde el index
 */

module.exports = {   //esto nos dice que service.js es un modulo que puede ser exportado

    getUsers: () => data,
    createUser: (user) => {
        let newUser = {
            id: data.length + 1,
            ...user
        };
        data.push(newUser);
        return newUser;
    },
};