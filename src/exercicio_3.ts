abstract class contaBancaria {
    protected saldo: number;
    protected numero: number;

    constructor(saldo: number, numero: number) {
        this.saldo = saldo;
        this.numero = numero;
    }

    abstract depositar(valor: number): number;
    abstract sacar(valor: number): boolean;
}

class contaCorrente extends contaBancaria {
    private limiteChequeEspecial: number;

    constructor(saldo: number, numero: number, limiteChequeEspecial: number) {
        super(saldo, numero);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public depositar(valor: number): number {
        this.saldo += valor;
        return this.saldo;
    }

    public sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        } else if ((this.saldo + this.limiteChequeEspecial) >= valor) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
    public obterSaldo(): number {
        return this.saldo;
    }
}

class contaPoupanca extends contaBancaria {
    private taxaDeJuros: number;

    constructor(saldo: number, numero: number, taxaDeJuros: number) {
        super(saldo, numero);
        this.taxaDeJuros = taxaDeJuros;
    }

    public depositar(valor: number): number {
        this.saldo += valor;
        return this.saldo;
    }

    public sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    public aplicarJuros(): void {
        this.saldo += this.saldo * this.taxaDeJuros;
    }
    public obterSaldo(): number {
        return this.saldo;
    }
}

let contaCorrente1 = new contaCorrente(1000, 123, 500);
let contaPoupanca1 = new contaPoupanca(0, 456, 0.05);

console.log(contaCorrente1.depositar(500));
console.log(contaCorrente1.sacar(2000));
console.log(contaCorrente1.obterSaldo());
console.log("-------------------------")
console.log(contaPoupanca1.depositar(100));
contaPoupanca1.aplicarJuros();
console.log(contaPoupanca1.obterSaldo());
