abstract class veiculo {
    protected modelo: string;
    protected capacidade: number;

    constructor(modelo: string, capacidade: number) {
        this.modelo = modelo;
        this.capacidade = capacidade;
    }

    abstract calcularConsumo(distancia?: number, passageiros?: number): number;
}

class taxi extends veiculo {
    private bandeirada: number;
    private valorKm: number;

    constructor(modelo: string, capacidade: number, bandeirada: number, valorKm: number) {
        super(modelo, capacidade);
        this.bandeirada = bandeirada;
        this.valorKm = valorKm;
    }

    public calcularConsumo(distancia?: number, passageiros?: number): number {
        if (passageiros && passageiros > this.capacidade) {
            console.log('Número de passageiros excede a capacidade do veículo');
            return 0; // Return a default value
        } else {
            return ((this.bandeirada + this.valorKm) * (distancia ?? 1)) * (passageiros ?? 1);
        }
    }
}

class onibus extends veiculo {
    private consumo: number;

    constructor(modelo: string, capacidade: number, consumo: number) {
        super(modelo, capacidade);
        this.consumo = consumo;
    }

    public calcularConsumo(distancia?: number): number {
        if (distancia) {
            return this.consumo * distancia;
        } else {
            return 0; // Return a default value
        }
    }
}
let taxi1 = new taxi('Fusca', 5, 5, 2);
let onibus1 = new onibus('Mercedes', 40, 130);

console.log(taxi1.calcularConsumo(10, 5));
console.log(onibus1.calcularConsumo(10));
