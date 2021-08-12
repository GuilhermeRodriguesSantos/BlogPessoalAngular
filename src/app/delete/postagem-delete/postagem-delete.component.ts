import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  
  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  idPostagem: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService
   
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/Logar'])
    }

    this.idPostagem = this.route.snapshot.params['idPostagem']
    this.findByIdPostagem(this.idPostagem)
    
  }
  findByIdPostagem(idPostagem: number){
    this.postagemService.getByIdPostagem(idPostagem).subscribe((resp :Postagem) =>{
      this.postagem = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }


  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  apagar(){
    this.postagemService.deletePostagem(this.idPostagem).subscribe(() => {
      alert('Postagem apagada com sucesso')
      this.router.navigate(["/inicio"])
    })
  }

}