import { Aluno } from './../cadastro';
import { Router } from '@angular/router';
import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import { init } from 'aos';

@Component({
  selector: 'app-lista-cadastro',
  templateUrl: './lista-cadastro.component.html',
  styleUrls: ['./lista-cadastro.component.css']
})
export class ListaCadastroComponent implements OnInit {

    public nome!: string;

    alunos?: Aluno[];
  constructor(private alunoService: AlunoService, private router: Router) { }

  total:any;
  pagina:number=1;

  ngOnInit(): void {
    this.alunosListar();
    init();
  }

  
  private alunosListar(){
    this.alunoService.alunosListar().subscribe(data => {
      this.alunos = data;
      this.total = data.length;
    });
  }

  alunoDetalhes(id: number){
    this.router.navigate(['detalhes', id]);
  }

  atualizarAluno(id: number){
    this.router.navigate(['atualizar', id]);
  }

  deletealuno(id: number){
    this.alunoService.deletealuno(id).subscribe( data => {
      console.log(data);
      this.alunosListar();
    })
  }

  buscarporNome(){
    this.alunoService.buscarNome(this.nome).subscribe(data => {
      this.alunos = data;
      this.total = data.length;
    });


}

voltarLista(){
  this.alunosListar()
}
}
