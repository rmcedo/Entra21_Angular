import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { SistemaService } from '../sistema.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css']
})
export class ConsumindoApiComponent implements OnInit {

  pokemon!:string
  email:string =""
  senha : string=""

  constructor(private service:PokemonService, private servicoBack:SistemaService) { }

  ngOnInit(): void {
  }

  buscar():void {

    this.service.quemEhEssePokemon(this.pokemon)
    .pipe(
      catchError(
        (error)=>{

          let lista = ["pikachu", "charmander", "dragonite"]

          return of(lista)
        }



      )
    )

    .subscribe((response)=>{
      console.log("RESPOSTA:", response);

    })

  }

  buscarTypes():void{

    this.service.quaisOsTipos()

    .pipe(
      catchError(
        (error)=>
        { return of(['merendar', 'merendar1'])}
      )
    )
    .subscribe((response)=>{
      console.log("FUNCIONOU",response);

    })
  }

  login(): void {
    this.servicoBack.login(this.getDados()).pipe(catchError(

      (error)=>{
        return of (error);
      }
    )).subscribe((response:any)=>{

      console.log("Processando....", response);


    })

    }

  register(): void {



  }


  getDados(): any {

    return {

      email:this.email,
      senha:this.senha

    }

  }
}
