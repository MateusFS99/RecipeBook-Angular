import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingrediente } from '../models/Ingrediente';

@Injectable({
    providedIn: 'root'
})

export class IngredienteService {

    baseURL = `${environment.MainURL}/Ingrediente`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Ingrediente[]> {

        return this.http.get<Ingrediente[]>(`${this.baseURL}`);
    }

    getById(id: number): Observable<Ingrediente> {

        return this.http.get<Ingrediente>(`${this.baseURL}/${id}`);
    }
}
