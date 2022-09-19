import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PropertyComponent } from './binding/property/property.component';
import { EventComponent } from './binding/event/event.component';
import { FormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './binding/mao-dupla/mao-dupla.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ReceberDadosComponent } from './dados/receber-dados/receber-dados.component';
import { EnviarComponent } from './dados/enviar/enviar.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { SegurancaService } from './seguranca.service';
import { DiretivasModule } from './diretivas/diretivas.module';
import { BindingModule } from './binding/binding.module';
import { DadosModule } from './dados/dados.module';
import { HttpClientModule } from '@angular/common/http';
import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component'
import { LoginComponent } from './login/login.component';
import { TestesBackEndComponent } from './testes-back-end/testes-back-end.component';


@NgModule({
  declarations: [

    AppComponent,
    PaginaComponent,
    OutroComponent,
    InicioComponent,
    ConsumindoApiComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    TestesBackEndComponent
    ,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DiretivasModule,
    BindingModule,

    DadosModule,
    HttpClientModule

  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
