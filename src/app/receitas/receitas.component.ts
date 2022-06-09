import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receita } from '../models/Receita';
import { ReceitaService } from './receita.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-receitas',
    templateUrl: './receitas.component.html',
    styleUrls: ['./receitas.component.css']
})

export class ReceitasComponent implements OnInit {

    public titulo: string = 'Receitas';
    public receitaForm: FormGroup;
    public receitaSelected: Receita;
    public receitas: Receita[];

    constructor(private fb: FormBuilder,
        private receitaService: ReceitaService) {

        this.criarForm();
    }

    ngOnInit() {

        this.loadReceitas();
    }

    criarForm() {

        this.receitaForm = this.fb.group({
            id: [0],
            titulo: ['', Validators.required],
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

        let modo = receita.id ? 'put' : 'post';

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

    customOptions: OwlOptions = {
        
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 600,
        navText: ['&#8249', '&#8250;'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            760: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
        nav: true
    }
}
