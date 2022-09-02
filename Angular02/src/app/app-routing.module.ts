import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { EnviarComponent } from './dados/enviar/enviar.component';

import { InicioComponent } from './inicio/inicio.component';


import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';

import { ReceberDadosComponent } from './dados/receber-dados/receber-dados.component';
import { SegurancaService } from './seguranca.service';
import { EventComponent } from './binding/event/event.component';
import { MaoDuplaComponent } from './binding/mao-dupla/mao-dupla.component';
import { PropertyComponent } from './binding/property/property.component';

import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: "goPagina", component: PaginaComponent, canActivate:[SegurancaService] },
  { path: "", component: LoginComponent },
  { path: "outro", component: OutroComponent, canActivate:[SegurancaService]  },
  { path: "property", component: PropertyComponent, canActivate:[SegurancaService]  },
  { path: "event", component: EventComponent, canActivate:[SegurancaService]  },
  { path: "maoDupla", component: MaoDuplaComponent, canActivate:[SegurancaService]  },
  { path: "receber/:info1/:dado2/:teste", component: ReceberDadosComponent, canActivate:[SegurancaService]  },
  { path: "enviar", component: EnviarComponent, canActivate:[SegurancaService]  },
  { path: "diretivaIf", component: DiretivaIfComponent, canActivate:[SegurancaService]  },
  { path: "diretivaFor/:lista", component: DiretivaForComponent, canActivate:[SegurancaService]  },
  { path: "consumindoApi", component: ConsumindoApiComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
