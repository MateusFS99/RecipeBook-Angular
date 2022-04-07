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

    public titulo: string = 'Ingredientes';
    public ingredienteForm: FormGroup;
    public dtOptions: DataTables.Settings = {};
    public ingredienteSelected: Ingrediente;
    public ingredientes: Ingrediente[];

    constructor(private fb: FormBuilder,
        private ingredienteService: IngredienteService) {

        this.criarForm();
    }

    ngOnInit() {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.loadIngredientes();
    }

    criarForm() {

        this.ingredienteForm = this.fb.group({
            id: [0],
            nome: ['', Validators.required]
        });
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

    ingredienteNovo() {

        this.ingredienteSelected = new Ingrediente();
        this.ingredienteForm.patchValue(this.ingredienteSelected);
    }

    ingredienteSelect(ingrediente: Ingrediente) {

        this.ingredienteSelected = ingrediente;
        this.ingredienteForm.patchValue(ingrediente);
    }

    ingredienteDelete(id: number) {

        this.ingredienteService.delete(id).subscribe(

            (model: any) => {

                console.log(model);
                this.loadIngredientes();
            },
            (error: any) => {

                console.error(error);
            }
        );
    }

    ingredienteSubmit() {

        this.salvarIngrediente(this.ingredienteForm.value);
    }

    salvarIngrediente(ingrediente: Ingrediente) {

        var modo = 'post';

        if (ingrediente.id != 0)
            modo = 'put';
        this.ingredienteService[modo](ingrediente).subscribe(
            (model: Ingrediente) => {
                console.log(model);
                this.loadIngredientes();
            },
            (error: any) => {
                console.log(error);
            }
        );
        this.voltar();
    }

    voltar() {

        this.ingredienteSelected = null;
    }
}
