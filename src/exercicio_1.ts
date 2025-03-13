abstract class Employee {
    protected nome: string;
    protected salario: number;
    protected cargo: string;

    constructor(nome: string, salario: number, cargo: string) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    abstract calcularVencimento(): void 
}

class funcionario extends Employee {
    private bonusAnual: string;

    constructor(nome: string, salario: number, cargo: string, bonusAnual: string) {
        super(nome, salario, cargo);
        this.bonusAnual = bonusAnual;
    }

    public calcularVencimento(): number {
        return this.salario;
    }
}

class terceirizado extends Employee {
    private valorHora: number;
    private horasTrabalhadas: number;

    constructor(nome: string, salario: number, cargo: string, valorHora: number, horasTrabalhadas: number) {
        super(nome, salario, cargo);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    public calcularVencimento(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

let funcionario1 = new funcionario('João', 3000, 'Analista', '500');
let terceirizado1 = new terceirizado('Maria', 0, 'Analista', 30, 160);

console.log(funcionario1.calcularVencimento());
console.log(terceirizado1.calcularVencimento());
