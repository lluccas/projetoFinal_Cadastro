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
  emailt:any;
  cpft:any;
  re: any;
  rcpf: any;
  
  constructor(private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    init();

    this.id = this.route.snapshot.params['id'];

    this.alunoService.procurarAlunoById(this.id).subscribe(data => {
      this.aluno = data;
      this.emailt = this.aluno.email;
      this.cpft = this.aluno.cpf
    }, error => console.log(error));

  }

   Atualizar (){
    this.re = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;
    this.rcpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (this.re.test(this.emailt)==false) {
      console.log(this.emailt)
      console.log(!this.re.test(this.emailt))
        alert("Email invalido use o padrão email@exemplo.com");
    }
    else if(!this.rcpf.exec(this.cpft)){
      alert("CPF inválido, use o padrão 000.000.000-00");
    }
    else{
      this.aluno.email = this.emailt;
      this.aluno.cpf = this.cpft
      this.alunoService.atualizarAluno(this.id, this.aluno).subscribe(data => {
        console.log(data)
        alert("Atualização realizada")
        this.voltarParaListar();
      },
      error => alert("CPF ja cadastrado, favor verificar!!")
      )

    }    
  }

  voltarParaListar(){
    this.router.navigate(['lista']);

  }
}
