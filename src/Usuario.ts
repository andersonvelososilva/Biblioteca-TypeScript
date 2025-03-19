import { Item } from './Item';

export class Usuario {
    private _itensEmprestados: Item[] = [];

    constructor(
        private _id: number,
        private _nome: string,
        private _email: string,
        private _telefone: string
    ) {}

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        if (email.includes('@')) {
            this._email = email;
        } else {
            throw new Error('Email inválido');
        }
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(telefone: string) {
        this._telefone = telefone;
    }

    get itensEmprestados(): Item[] {
        return this._itensEmprestados;
    }

    emprestarItem(item: Item): boolean {
        if (this._itensEmprestados.length < 5) {
            this._itensEmprestados.push(item);
            return true;
        }
        return false;
    }

    devolverItem(id: number): boolean {
        const index = this._itensEmprestados.findIndex(item => item.id === id);
        if (index !== -1) {
            this._itensEmprestados.splice(index, 1);
            return true;
        }
        return false;
    }
}