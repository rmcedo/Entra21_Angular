import { Component } from '@angular/core';
import { SegurancaService } from './seguranca.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular02';

  constructor(public seguranca: SegurancaService) {


  }

}
