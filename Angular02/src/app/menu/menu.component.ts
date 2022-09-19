import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links!:Array<any>

  constructor() { }

  ngOnInit(): void {

    this.links=new Array()
    this.links.push({

      rota:"/",
      textContent: "Início",
      cor:"nav-icon far fa-circle text-light"

    });
    this.links.push({

      rota:"goPagina",
      textContent: "Página",
      cor:"nav-icon far fa-circle text-success"

    });

    this.links.push({
      rota:"outro",
      textContent: "Outro",
      cor:"nav-icon far fa-circle text-danger"

    })
    this.links.push({
      rota:"property",
      textContent: "Property",
      cor:"nav-icon far fa-circle text-primary"

    })
    this.links.push({
      rota:"event",
      textContent: "Events",
      cor:"nav-icon far fa-circle text-dark"

    })
    this.links.push({
      rota:"maoDupla",
      textContent: "Mão Dupla",
      cor:"nav-icon far fa-circle text-info"

    })
    this.links.push({
      rota:["receber","Rafael", 28, "Blumenau" ],
      textContent: "Receber",
      cor:"nav-icon far fa-circle text-secondary"

    })
    this.links.push({
      rota:"enviar",
      textContent: "Enviar",
      cor:"nav-icon far fa-circle text-warning"

    })
    this.links.push({
      rota:"diretivaIf",
      textContent: "Diretiva IF",
      cor:"nav-icon far fa-circle text-primary"

    })
    this.links.push({
      rota:"diretivaFor/:lista",
      textContent: "Diretiva FOR",
      cor:"nav-icon far fa-circle text-success"

    })
    this.links.push({
      rota:"consumindoApi",
      textContent: "Consumindo API",
      cor:"nav-icon far fa-circle text-light"

    })
    this.links.push({
      rota:"testesBackEnd",
      textContent: "Testes Back-End",
      cor:"nav-icon far fa-circle text-dark"

    })

  }

}
