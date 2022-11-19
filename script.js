class Imovel {
    Endereco
    Cep
    Area
    QtdBanheiros
    QtdQuartos
    Moradores = []
    Valor

    constructor(endereco, cep, area, qtdBanheiros, qtdQuartos, valor) {
        this.Endereco = endereco;
        this.Cep = cep;
        this.Area = area;
        this.QtdBanheiros = qtdBanheiros;
        this.QtdQuartos = qtdQuartos;
        this.Valor = valor;
    }

    AdcionarMorador(pessoa) {
        this.Moradores.push(pessoa)
    }

    RemoverMotador(nomePessoa) {
        let moradoresSup = []
        Moradores.forEach(x => {
            if (x.Nome == nomePessoa) {
                x = null
            }

        });

        Moradores.forEach(x => {
            if (x.Nome != null) {
                moradoresSup.push(x)
            }
        })
        this.Moradores = moradoresSup
    }
}

class Pessoa {
    Nome
    Cpf
    DataNascimento

    constructor(nome, cpf, dataNascimento) {
        this.Nome = nome
        this.Cpf = cpf
        this.DataNascimento = dataNascimento
    }
}

class Casa extends Imovel {
    ComQuintal

    constructor(endereco, cep, area, qtdBanheiros, qtdQuartos, valor, quintal) {
        super(endereco, cep, area, qtdBanheiros, qtdQuartos, valor)
        this.ComQuintal = quintal
        if (qtdBanheiros > 5) {
            this.QtdBanheiros = 5
        }
    }

    CalcularValor() {
        if (this.ComQuintal) {
            this.Valor = this.Valor + (this.Valor * 0.3)
        }
    }
}

class Apartamento extends Imovel {
    Andar
    ValorCondominio

    constructor(endereco, cep, area, qtdBanheiros, qtdQuartos, valor, andar, valorCondominio) {
        super(endereco, cep, area, qtdBanheiros, qtdQuartos, valor)
        this.Andar = andar
        this.ValorCondominio = valorCondominio
        if (qtdBanheiros > 3) {
            this.QtdBanheiros = 3
        }
    }
    CalcularValor() {
        this.Valor = this.Valor + this.ValorCondominio
    }
}

class Kitnet extends Imovel {
    constructor(endereco, cep, area, qtdBanheiros, qtdQuartos, valor) {
        super(endereco, cep, area, qtdBanheiros, qtdQuartos, valor)
        if (qtdBanheiros > 2) {
            this.QtdBanheiros = 2
        }
    }
}

let pessoa1 = new Pessoa("Vinicius", "123456789", "11/01/2001")
let pessoa2 = new Pessoa("Victor", "987654321", "20/06/2001")

let casa = new Casa("rua casa", "5678443", 150, 8, 3, 400000, true)
let apartamento = new Apartamento("rua apartamento", "234551671", 70, 2, 2, 250000, 3, 1000)
let kitnet = new Kitnet("rua kitnet", "19734674", 50, 4, 2, 100000)