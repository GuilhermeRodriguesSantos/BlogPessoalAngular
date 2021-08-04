  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]


  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/Logar'])
    }

    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  Cadastrar(){
      this.temaService.postTema(this.tema).subscribe((resp => {
        this.tema = resp
        alert('Tema Cadastrado com sucesso!')
        this.findAllTemas()
        this.tema = new Tema()
      }))
  }


}
