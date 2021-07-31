import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { usuario } from '../model/usuario';
import { usuarioLogin } from '../model/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ){ 
  }

  entra(UsuarioLogin: usuarioLogin): Observable<usuarioLogin>{
    return this.http.put<usuarioLogin>('http://localhost:8080/usuario/Logar', UsuarioLogin)

  }
 cadastrar(Usuario: usuario): Observable<usuario>{
   return this.http.post<usuario>('http://localhost:8080/usuario/Cadastrar', Usuario)

  }

  logado(){
    let ok: boolean  = false

    if(environment.token != ''){
      ok = true
    }

    return ok

  }

}
