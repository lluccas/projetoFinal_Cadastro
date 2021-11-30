import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8081/api/v1/alunos";

  constructor(private httpClient: HttpClient) { }

  buscarEmail(email:string): Observable<Login[]>{
    return this.httpClient.get<Login[]>(`${this.baseURL}/${email}`);
  }
  
  
  buscarSenha(senha:string): Observable<Login[]>{
    return this.httpClient.get<Login[]>(`${this.baseURL}/${senha}`);
  }
}
