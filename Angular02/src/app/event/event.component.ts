import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  resultado !: number
  tamanho: number = 10

  constructor() { }

  ngOnInit(): void {
  }


  minhaFunc() {

    alert("Hello People")
  }

  somar() {
    this.resultado = 1 + 2

  }

  subtrair(a: number, b: number) {
    this.resultado = a - b

  }

  multiplicar() {

    let numA: number = Number(prompt("Informe o Primeiro Número: "))
    let numB: number = Number(prompt("Informe o Segundo Número: "))

    this.resultado = numA * numB


  }

  dividir() {

    let numA: number = Number(prompt("Informe o Primeiro Número: "))
    let numB: number = Number(prompt("Informe o Segundo Número: "))

    this.resultado = numA / numB
  }

  aumentar(){
    this.tamanho +=25

  }

  diminuir(){

    this.tamanho-=20

  }
}


