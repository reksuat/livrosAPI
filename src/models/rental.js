module.exports = model;
const bookControllers = require("../controllers/book")
const studentControllers = require("../controllers/student")

let proxId= 1;

function model(body, id= proxId++) {
    if (
        body.dataAluguel != "" &&
        body.dataAluguel != undefined &&
        body.dataDevolucao != "" &&
        body.dataDevolucao != undefined &&
        bookControllers.show(body.idLivro)&&
        studentControllers.show(body.idEstudante)
    ) {
        return{
            id,
            idLivro: body.idLivro,
            idEstudante: body.idEstudante,
            dataAluguel: body.dataAluguel,
            dataDevolucao: body.dataDevolucao
        }
    }
}