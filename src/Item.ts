export abstract class Item {
    constructor(
        public id: number,
        public titulo: string,
        public ano: number
    ) {}

    abstract exibirDetalhes(): string;
}