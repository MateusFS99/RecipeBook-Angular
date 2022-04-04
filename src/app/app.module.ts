import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { NavComponent } from './shared/nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [
        AppComponent,
        ReceitasComponent,
        IngredientesComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BsDropdownModule.forRoot(),
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
