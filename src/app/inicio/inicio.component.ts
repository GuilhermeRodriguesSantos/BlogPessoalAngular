import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tema: Tema = new Tema()
  postagem: Postagem = new Postagem()
  listaTemas: Tema[]
  idTema: number
  listaPostagens: Postagem[]

  usuario: Usuario = new Usuario()
  idusuario = environment.idUsuario

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/Logar'])
    }

    this.getAllTemas()
    this.getAllpostagem()
  }


  getAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })

    }
  
getAllpostagem(){
  this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp

  })
}


  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

   this.usuario.idUsuario = environment.idUsuario
    this.postagem.usuario = this.usuario 
    console.log("Postagem "+JSON.stringify(this.postagem))
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

}
