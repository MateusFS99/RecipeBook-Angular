import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';

@NgModule({
  declarations: [		
    AppComponent,
      ReceitasComponent,
      IngredientesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
