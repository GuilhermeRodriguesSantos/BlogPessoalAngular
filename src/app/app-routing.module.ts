import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {
    path: '' , redirectTo: 'Logar', pathMatch: 'full'
  },

  {
    path: 'Tema', component: TemaComponent
  },
  
  {
    path:'Logar', component: LoginComponent
  },

  {
    path:'Cadastrar', component: CadastroComponent
  },

  {
    path: 'inicio', component: InicioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
