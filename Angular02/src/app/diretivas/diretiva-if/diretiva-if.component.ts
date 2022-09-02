import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-if',
  templateUrl: './diretiva-if.component.html',
  styleUrls: ['./diretiva-if.component.css']
})
export class DiretivaIfComponent implements OnInit {


  aparece!:boolean
  idade!:number

  constructor() { }

  ngOnInit(): void {

    this.aparece=true
  }

  alterar(){

    this.aparece = !this.aparece

  }

  maiorIdade(): boolean{

    return this.idade>=18

  }
}
