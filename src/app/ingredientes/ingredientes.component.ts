import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingrediente } from '../models/Ingrediente';
import { IngredienteService } from './ingrediente.service';

@Component({
    selector: 'app-ingredientes',
    templateUrl: './ingredientes.component.html',
    styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

    public titulo = 'Ingredientes';
    public ingredienteForm: FormGroup;
    public ingredienteSelected: Ingrediente | null;
    public ingredientes: Ingrediente[];

    constructor(private fb: FormBuilder,
        private ingredienteService: IngredienteService) {

        this.criarForm();
    }

    ngOnInit() {

        this.loadIngredientes();
    }

    loadIngredientes() {

        this.ingredienteService.getAll().subscribe(

            (ingredientes: Ingrediente[]) => {

                this.ingredientes = ingredientes;
            },
            (error: any) => {

                console.error(error);
            }
        );
    }

    ingredienteSelect(ingrediente: Ingrediente) {

        this.ingredienteSelected = ingrediente;
        this.ingredienteForm.patchValue(ingrediente);
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
