import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

 
token = {
  headers: new HttpHeaders().set('Authorization', environment.token)
}

  getAllTemas(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/Tema/buscarTodos', this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('http://localhost:8080/Tema/Adicionar', tema , this.token)

  }
}
