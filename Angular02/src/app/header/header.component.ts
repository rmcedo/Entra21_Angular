import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegurancaService } from 'src/app/seguranca.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private seguranca: SegurancaService) { }

  ngOnInit(): void {

  }


  sair(): void {

    this.seguranca.entrou = false;
    this.router.navigateByUrl("")

  }

}


