import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '' , redirectTo: 'Logar', pathMatch: 'full'
  },

  {
    path:'Logar', component: LoginComponent
  },

  {
    path:'Cadastrar', component: CadastroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
