import { AlunoService } from './../aluno.service';
import { Aluno } from './../cadastro';
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  aluno: Aluno = new Aluno();
  emailt:any;
  cpft:any;
  re: any;
  rcpf: any;
  
  constructor(private alunoService: AlunoService , private router: Router) { }

  ngOnInit(): void {
    Aos.init();
  }

  saveAluno(){
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
          this.alunoService.createCadastro(this.aluno).subscribe(data => {
            console.log(data)
            alert("Cadastro realizado")
            this.voltarParaListar();
          },
          error => alert("CPF ja cadastrado, favor verificar!!")
          )

        }    
  }

  voltarParaListar(){
    this.router.navigate(['lista']);
  }

 /* onSubmit(){
    console.log(this.aluno)
    this.saveCadastro();
  }*/

 

}
function jQuery(arg0: string) {
  throw new Error('Function not implemented.');
}

