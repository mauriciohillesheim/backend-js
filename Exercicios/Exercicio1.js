function Exercicio1(num1, num2){
    const resultado = Number(num1) + Number(num2)
    return resultado
}

function Exercicio2(valor, horas){
    const resultado = Number(valor) * Number(horas)
    return resultado
}

function Exercicio3(peso1, peso2, peso3, peso4, peso5){
    const resultado = ((Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5))/5)
    return resultado
}

function Exercicio4(temperatura){
    const resultado = (9*temperatura+160)/5
    return resultado
}

module.exports = { Exercicio1, Exercicio2, Exercicio3, Exercicio4 }