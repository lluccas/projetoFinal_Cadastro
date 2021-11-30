import { AtualizarComponent } from './atualizar/atualizar.component';
import { DetalhesCadastroComponent } from './detalhes-cadastro/detalhes-cadastro.component';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
import { CadastroComponent } from './cadastro-creat/cadastro.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: ListaCadastroComponent},

  {path:'cadastro', component: CadastroComponent},
  {path:'lista', component: ListaCadastroComponent},
  {path: 'detalhes/:id', component: DetalhesCadastroComponent},
  {path: 'atualizar/:id', component: AtualizarComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
