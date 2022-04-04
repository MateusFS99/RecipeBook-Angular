import { Ingrediente } from './Ingrediente';

export class Receita {

    id: number;
    titulo: string;
    instrucoes: string;
    ingredientes: Ingrediente[];
}
