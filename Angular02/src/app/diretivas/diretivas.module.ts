import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DiretivaIfComponent,
    DiretivaForComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DiretivasModule { }
