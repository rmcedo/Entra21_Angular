import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({

  providedIn: 'root'

})

export class SistemaService {



  sistemaURL: string = "http://localhost:8080/sistema"

  constructor(private http: HttpClient) { }



  login(credenciais: any) {



    return this.http.post<any>(this.sistemaURL + "/login", credenciais)

  }



  register(credenciais: any) {



    return this.http.post<any>(this.sistemaURL + "/register", credenciais)

  }

}
