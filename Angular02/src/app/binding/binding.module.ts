import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';



@NgModule({
  declarations: [
    EventComponent,
    PropertyComponent,
    MaoDuplaComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BindingModule { }
