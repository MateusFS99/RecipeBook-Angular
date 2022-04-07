import { Ingrediente } from './Ingrediente';

export class Receita {

    constructor() {

        this.id = 0;
        this.titulo = '';
        this.instrucoes = '';
        this.ingredientes = [];
    }

    id: number;
    titulo: string;
    instrucoes: string;
    ingredientes: Ingrediente[];
}
