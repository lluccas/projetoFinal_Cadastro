import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../cadastro';
import { init } from 'aos';


@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  id!: number;
  aluno: Aluno = new Aluno();
  constructor(private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    init();

    this.id = this.route.snapshot.params['id'];

    this.alunoService.procurarAlunoById(this.id).subscribe(data => {
      this.aluno = data;
    }, error => console.log(error));

  }

  onSubmit  (){
    this.alunoService.atualizarAluno(this.id, this.aluno).subscribe( data =>{
      this.voltarParaListar();
    }
    , error => alert("CPF ja cadastrado ou formato de E-MAIL inválido, favor verificar!!"))
  }

  voltarParaListar(){
    this.router.navigate(['lista']);

  }
}
