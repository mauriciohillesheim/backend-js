const ServicesExericios = require('../Services/Exercicios')

class ControllersExericios {

    Exercicio1(req, res) {
        try {
            const resultado = ServicesExericios.Exercicio1(req.body.num1, req.body.num2)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Exercicio2(req, res) {
        try {
            const resultado = ServicesExericios.Exercicio2(req.body.valor, req.body.horas)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Exercicio3(req, res) {
        try {
            const resultado = ServicesExericios.Exercicio3(req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Exercicio4(req, res) {
        try {
            const resultado = ServicesExericios.Exercicio4(req.body.temperatura)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Exercicio5(req, res) {
        try {
            const resultado = ServicesExericios.Exercicio5(req.body.distancia)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Exercicio6(req, res) {
        try {
            const resultado = ServicesExericios.Exercicio6(req.body.num1)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Exercicio7(req, res) {
        try {
            const resultado = ServicesExericios.Exercicio7(req.body.num1)
            res.status(201).json({ resultado: resultado[0] + " kilômetros, " + resultado[1] + " metros e " + resultado[2] + " centímentros." })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

    Exercicio8(req, res) {
        try {
            const resultado = ServicesExericios.Exercicio8(req.body.num1)
            res.status(201).json({ resultado: resultado })
        } catch (e) {
            res.status(422).json({ resultado: e.message })
        }
    }

}

module.exports = new ControllersExericios()