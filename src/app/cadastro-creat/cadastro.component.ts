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
  
  constructor(private alunoService: AlunoService , private router: Router) { }

  ngOnInit(): void {
    Aos.init();
  }

  saveAluno(){
    this.alunoService.createCadastro(this.aluno).subscribe(data => {
      console.log(data)
      alert("Cadastro realizado")
      this.voltarParaListar();
    },
    error => alert("CPF ja cadastrado ou formato de E-MAIL inválido, favor verificar!!")
    )

    
  
    /*subscribe( data =>{
      console.log(data);
      alert("Cadastro realizado com sucesso!!!!");
    },
    error => console.log(error));*/
  }

  voltarParaListar(){
    this.router.navigate(['lista']);

  }

 /* onSubmit(){
    console.log(this.aluno)
    this.saveCadastro();
  }*/

 

}
