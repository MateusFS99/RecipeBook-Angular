import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receita } from '../models/Receita';

@Injectable({
    providedIn: 'root'
})
export class ReceitaService {

    baseURL = `${environment.MainURL}/Receita`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Receita[]> {

        return this.http.get<Receita[]>(`${this.baseURL}`);
    }

    getById(id: number): Observable<Receita> {

        return this.http.get<Receita>(`${this.baseURL}/${id}`);
    }

    post(receita: Receita) {

        return this.http.post(`${this.baseURL}`, receita);
    }

    put(receita: Receita) {

        return this.http.put(`${this.baseURL}/${receita.id}`, receita);
    }

    delete(id: number) {

        return this.http.delete(`${this.baseURL}/${id}`);
    }
}
