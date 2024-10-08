module.exports = model;

let proxId = 1;

function model(body, id = proxId++) {
    if (
        body.nome != undefined &&
        body.nome != "" &&
        body.matricula != undefined &&
        body.matricula != "" &&
        body.curso != undefined &&
        body.curso != "" &&
        !isNaN(body.ano) 
    ) {
        return{
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}