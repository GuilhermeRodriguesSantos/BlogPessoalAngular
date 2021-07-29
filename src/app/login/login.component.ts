import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { usuarioLogin } from '../model/usuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UsuarioLogin: usuarioLogin = new usuarioLogin

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  logar(){
    this.auth.entra(this.UsuarioLogin).subscribe((resp: usuarioLogin) => {
      this.UsuarioLogin = resp

      environment.token = this.UsuarioLogin.token
      environment.nome = this.UsuarioLogin.nome
      environment.foto = this.UsuarioLogin.foto
     
      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)


      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 500) {
        alert('Usuario ou senha incoretos')
      }
    })
  }

}
