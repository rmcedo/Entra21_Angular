import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  path : string = "https://pokeapi.co/api/"

  constructor(private http: HttpClient) { }

  quemEhEssePokemon (pokemon:string){

console.log(this.path+"pokemon/"+pokemon);

    return this.http.get<any>(this.path+"pokemon/"+pokemon)
  }


  quaisOsTipos(){

    return this.http.get<any>(this.path+"type")
  }
}
