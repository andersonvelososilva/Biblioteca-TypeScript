import { Item } from './Item';

export class Revista extends Item {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        public edicao: number,
        public periodicidade: string
    ) {
        super(id, titulo, ano);
    }

    exibirDetalhes(): string {
        return `Revista: ${this.titulo} (${this.ano}) - Edição: ${this.edicao}, Periodicidade: ${this.periodicidade}`;
    }
}