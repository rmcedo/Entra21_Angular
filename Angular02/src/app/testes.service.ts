import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestesService {

  apiUrl: string = 'http://localhost:8080/programadores'

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{

    return this.http.get<any>(this.apiUrl);
  }

  getById(programador:any):Observable<any>{

    return this.http.get<any>(this.apiUrl + '/'+programador.id);
  }

  create(programador:any):Observable<any>{

    return this.http.post<any>(this.apiUrl, programador)
  }
  update(programador:any):Observable<any>{

    return this.http.put<any>(this.apiUrl+ '/'+ programador.id, programador)
  }
  delete(programador:any):Observable<any>{

    return this.http.delete<any>(this.apiUrl+ '/'+ programador.id)
  }
}
