abstract class publicacao {
    protected titulo: string;
    protected autor: string;
    protected descricao: string;

    constructor(titulo: string, autor: string, descricao: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.descricao = descricao;
    }

    abstract exibirResumo(): string;
}

class artigo extends publicacao {
    private numeroDePalavras: number;

    constructor(titulo: string, autor: string, descricao: string, numeroDePalavras: number) {
        super(titulo, autor, descricao);
        this.numeroDePalavras = numeroDePalavras;
    }

    public exibirResumo(): string {
        return `${this.titulo} - ${this.autor} - ${this.descricao} - ${this.numeroDePalavras}`;
    }
}

class video extends publicacao {
    private duracao: number;

    constructor(titulo: string, autor: string, descricao: string, duracao: number) {
        super(titulo, autor, descricao);
        this.duracao = duracao;
    }

    public exibirResumo(): string {
        return `${this.titulo} - ${this.autor} - ${this.descricao} - ${this.duracao}`;
    }
}

let artigo1 = new artigo('Artigo 1', 'Autor 1', 'Descrição 1', 500);
let video1 = new video('Video 1', 'Autor 2', 'Descrição 2', 10);

console.log(artigo1.exibirResumo());
console.log(video1.exibirResumo());
