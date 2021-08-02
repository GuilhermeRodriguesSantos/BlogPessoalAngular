import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin
 

  constructor
  (
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit()
   {
     window.scroll(0,0)
  }

  logar(){
    this.auth.Logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.idUsuario = this.usuarioLogin.idUsuario
      environment.nome = this.usuarioLogin.nome
      environment.token = this.usuarioLogin.token
      environment.foto = this.usuarioLogin.foto

      console.log(environment.idUsuario)
      console.log(environment.nome)
      console.log(environment.token)
      console.log(environment.foto)
      
      
      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 500 || erro.status == 400){
        alert('Usuario ou senhar incoretas')
      }
    })

  }

}