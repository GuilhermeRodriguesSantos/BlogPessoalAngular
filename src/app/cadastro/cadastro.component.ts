import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmaSenha: string
  tipoUsu: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }

  confirmSenha(event: any){
      this.confirmaSenha = event.target.value
  }

  tipoUsuario(event: any){
      this.tipoUsu = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsu

    if(this.usuario.senha != this.confirmaSenha){
      alert('As senhas estão Incoretas')

    }else{
        this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp
          this.router.navigate(['/Logar'])
          alert('usuario Cadastrado com sucesso!')
        })
    }
  }
}