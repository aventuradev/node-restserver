const { response, request } = require("express");



const usuariosGet = ( req = response, res = response) => {
    //req.query = parametros via url en par nombre, valor
        // Ej: /api/usuarios/?q=hola&nombre=Antony%20Ventura&edad=30
    const { q, nombre, edad } = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        edad
    });
}


const usuariosPost = ( req = response, res = response) => {

    // req.body = atributos enviados a través del body
        // { "nombre": "Antony Ventura", "edad": 27, "apellido": "Otra cosa"}
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre, 
        edad
    });
}

const usuariosPut = ( req = request, res = response) => {

    // req.params = parametros enviados a través del url
         // Ej: /api/usuarios/1051651
    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}


const usuariosDelete = ( req = response, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}


const usuariosPatch = ( req = response, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
}