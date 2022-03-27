import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingrediente } from '../models/Ingrediente';

@Component({
    selector: 'app-ingredientes',
    templateUrl: './ingredientes.component.html',
    styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

    public titulo = 'Ingredientes';
    public ingredienteForm!: FormGroup;
    public ingredienteSelected!: Ingrediente | null;
    public ingredientes = [

        { id: 1, nome: 'Farinha' },
        { id: 2, nome: 'Fermento' },
        { id: 3, nome: 'Achocolatado' },
        { id: 4, nome: 'Leite' },
        { id: 5, nome: 'Tomate' },
        { id: 6, nome: 'Sal' },
    ];

    constructor(private fb: FormBuilder) {

        this.criarForm();
    }

    ngOnInit() {
    }

    ingredienteSelect(ingrediente: Ingrediente) {

        this.ingredienteSelected = ingrediente;
    }

    criarForm() {

        this.ingredienteForm = this.fb.group({
            id: [0],
            nome: ['', Validators.required]
        });
    }

    voltar() {

        this.ingredienteSelected = null;
    }
}
