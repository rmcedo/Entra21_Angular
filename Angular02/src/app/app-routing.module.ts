import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { InicioComponent } from './inicio/inicio.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [

  {path: "goPagina",  component: PaginaComponent},
  {path: "",  component: InicioComponent},
  {path: "outro",  component: OutroComponent},
  {path: "property",  component: PropertyComponent},
  {path: "event",  component: EventComponent},
  {path: "maoDupla",  component: MaoDuplaComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
