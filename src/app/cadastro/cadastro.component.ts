import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
    Usuario: usuario = new usuario
    confirmarSenha: string
    TipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)

  }

  confirmaSenha(event: any){
    this.confirmarSenha = event.target.value
    
  }

  tipoUsuario(event: any){
    this.TipoUsuario = event.target.value

  }

  cadastrar(){
    this.Usuario.tipo = this.TipoUsuario

    if(this.Usuario.senha != this.confirmarSenha){
        alert('A senhas estão incoretas')
    }else{
      this.authService.cadastrar(this.Usuario).subscribe((resp: usuario) => {
          this.Usuario = resp
          this.router.navigate(['/Logar'])
          alert('Usuario Cadastrado com sucessoo')
        })
    }

  }

}
