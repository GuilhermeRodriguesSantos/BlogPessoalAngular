import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {
    path: '' , redirectTo: 'Logar', pathMatch: 'full'
  },

  {path:"editar-Tema/:id", component: TemaEditComponent},

  {path:"deletar-Tema/:id", component: TemaDeleteComponent},

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
