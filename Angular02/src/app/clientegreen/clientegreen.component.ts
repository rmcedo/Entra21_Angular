import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientegreen',
  templateUrl: './clientegreen.component.html',
  styleUrls: ['./clientegreen.component.css']
})
export class ClientegreenComponent implements OnInit {

  aparece!:boolean


  constructor() { }

  ngOnInit(): void {

    this.aparece=false
  }

  alterar(){

    this.aparece = !this.aparece

  }

}
