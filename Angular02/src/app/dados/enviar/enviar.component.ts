import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.component.html',
  styleUrls: ['./enviar.component.css']
})
export class EnviarComponent implements OnInit {

  nome !: string
  idade !: number
  cidade !: string

  constructor(

    private router:Router


  ) { }

  ngOnInit(): void {

  }

  enviarDados(){

    console.log("Enviando: ", this.nome);
    console.log("Enviando: ", this.idade);
    console.log("Enviando: ", this.cidade);

    this.router.navigate(['receber',this.nome,this.idade,this.cidade])

  }

  enviarLista(){

    let lista : any = [
      "Rafael",
      "Daiane",
      "Vitor",
      "Paula"
    ]
    this.router.navigate(['diretivaFor', lista])

  }

}
