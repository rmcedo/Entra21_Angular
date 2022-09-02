import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receber-dados',
  templateUrl: './receber-dados.component.html',
  styleUrls: ['./receber-dados.component.css']
})
export class ReceberDadosComponent implements OnInit {

  dado1!: string | null
  dado2!: number
  dado3!: string | null


  constructor(

    private route: ActivatedRoute


  ) { }

  ngOnInit(): void {


    console.log("Recebi", this.route.snapshot.paramMap);
    console.log("nome", this.route.snapshot.paramMap.get("info1"));

    this.dado1 = this.route.snapshot.paramMap.get("info1")
    this.dado2 = Number(this.route.snapshot.paramMap.get("dado2"))
    this.dado3 = this.route.snapshot.paramMap.get("teste")


  }

}
