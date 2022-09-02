import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mao-dupla',
  templateUrl: './mao-dupla.component.html',
  styleUrls: ['./mao-dupla.component.css']
})
export class MaoDuplaComponent implements OnInit {

  num1 !: number
  num2 !: number
  resultado !: number

  curso: string = "Angular"

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.curso="Merendar"
    }, 15000);
  }

  somar(){

    this.resultado = this.num1+this.num2
    return this.resultado
  }

}
