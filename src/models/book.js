module.exports = model;
let proxId = 1;

function model(body, id = proxId++) {
    if (
        body.titulo != undefined &&
        body.titulo != "" &&
        body.autor != undefined &&
        body.autor != "" &&
        body.genero != undefined &&
        body.genero != "" &&
        !isNaN(body.ano)
    ) {
        return{
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        }
        
    }
}