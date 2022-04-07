import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receita } from '../models/Receita';
import { ReceitaService } from './receita.service';

@Component({
    selector: 'app-receitas',
    templateUrl: './receitas.component.html',
    styleUrls: ['./receitas.component.css']
})

export class ReceitasComponent implements OnInit {

    public titulo: string = 'Receitas';
    public receitaForm: FormGroup;
    public dtOptions: DataTables.Settings = {};
    public receitaSelected: Receita;
    public receitas: Receita[];

    constructor(private fb: FormBuilder,
        private receitaService: ReceitaService) {

        this.criarForm();
    }

    ngOnInit() {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.loadReceitas();
    }

    criarForm() {

        this.receitaForm = this.fb.group({
            id: [0],
            nome: ['', Validators.required],
            instrucoes: ['', Validators.required]
        });
    }

    loadReceitas() {

        this.receitaService.getAll().subscribe(

            (receitas: Receita[]) => {

                this.receitas = receitas;
            },
            (error: any) => {

                console.error(error);
            }
        );
    }

    receitaNova() {

        this.receitaSelected = new Receita();
        this.receitaForm.patchValue(this.receitaSelected);
    }

    receitaSelect(receita: Receita) {

        this.receitaSelected = receita;
        this.receitaForm.patchValue(receita);
    }

    receitaDelete(id: number) {

        this.receitaService.delete(id).subscribe(

            (model: any) => {

                console.log(model);
                this.loadReceitas();
            },
            (error: any) => {

                console.error(error);
            }
        );
    }

    receitaSubmit() {

        this.salvarReceita(this.receitaForm.value);
    }

    salvarReceita(receita: Receita) {

        var modo = 'post';

        if (receita.id != 0)
            modo = 'put';
        this.receitaService[modo](receita).subscribe(
            (model: Receita) => {
                console.log(model);
                this.loadReceitas();
            },
            (error: any) => {
                console.log(error);
            }
        );
        this.voltar();
    }

    voltar() {

        this.receitaSelected = null;
    }
}
