import { Aluno } from './cadastro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseURL = "http://localhost:8081/api/v1/alunos";

  private baseURL2 = "http://localhost:8081/api/v1/alunosnome";


  constructor(private httpClient: HttpClient) { }

  createCadastro(aluno: Aluno): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, aluno);
  }

  atualizarAluno(id: number, aluno: Aluno): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, aluno);
  }

  deletealuno(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  buscarNome(nome:string): Observable<Aluno[]>{
    return this.httpClient.get<Aluno[]>(`${this.baseURL2}/${nome}`);
  }

  procurarAlunoById(id: number): Observable<Aluno>{
    return this.httpClient.get<Aluno>(`${this.baseURL}/${id}`);
  }

  alunosListar(): Observable<Aluno[]>{
    return this.httpClient.get<Aluno[]>(`${this.baseURL}`);
  }



}
