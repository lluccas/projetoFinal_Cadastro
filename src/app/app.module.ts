import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro-creat/cadastro.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
import { DetalhesCadastroComponent } from './detalhes-cadastro/detalhes-cadastro.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaCadastroComponent,
    DetalhesCadastroComponent,
    AtualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
