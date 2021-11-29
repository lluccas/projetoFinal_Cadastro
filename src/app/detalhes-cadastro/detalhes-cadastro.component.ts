import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../cadastro';
import { init } from 'aos';


@Component({
  selector: 'app-detalhes-cadastro',
  templateUrl: './detalhes-cadastro.component.html',
  styleUrls: ['./detalhes-cadastro.component.css']
})
export class DetalhesCadastroComponent implements OnInit {

  id!: number
  aluno!: Aluno
  constructor(private route: ActivatedRoute, private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.aluno = new Aluno();
    this.alunoService.procurarAlunoById(this.id).subscribe( data => {
      this.aluno = data;
    });
    init();
  }

}
