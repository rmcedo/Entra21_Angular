import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { EnviarComponent } from './enviar/enviar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    ReceberDadosComponent,
    EnviarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DadosModule { }
