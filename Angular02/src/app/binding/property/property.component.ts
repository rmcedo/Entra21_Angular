import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  // ---> PROPERTIES <---

  nome: string = "Agora eu entendi"
  sobrenome!: string    // !: significa que a variavel não é precisa ser inicializada agora
  idade: number = 28
  cidade: string = "Blumenau"
  empresa: string = "Sênior Sistemas"
  enderecoImg: string = "https://icons-for-free.com/download-icon-angular-1321215611022593855_512.png"
  padrao: string = "64"
  google: string = "https://google.com"
  alvo: string = "_blank" //blank abrira uma nova aba
  tabela: string = "table table-bordered table-striped table-hover table-sm"


  constructor() { }

  ngOnInit(): void {

  }
}

