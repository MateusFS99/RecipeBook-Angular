import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { ReceitasComponent } from './receitas/receitas.component';

const routes: Routes = [
    { path: '', redirectTo: 'receitas', pathMatch: 'full' },
    { path: 'receitas', component: ReceitasComponent },
    { path: 'ingredientes', component: IngredientesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
