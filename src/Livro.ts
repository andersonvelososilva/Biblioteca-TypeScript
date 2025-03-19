import { Item } from './Item';

export class Livro extends Item {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        public autor: string,
        public editora: string,
        public numeroPaginas: number
    ) {
        super(id, titulo, ano);
    }

    exibirDetalhes(): string {
        return `Livro: ${this.titulo} (${this.ano}) - Autor: ${this.autor}, Editora: ${this.editora}, Páginas: ${this.numeroPaginas}`;
    }
}