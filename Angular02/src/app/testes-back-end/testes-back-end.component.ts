import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { TestesService } from '../testes.service';

@Component({
  selector: 'app-testes-back-end',
  templateUrl: './testes-back-end.component.html',
  styleUrls: ['./testes-back-end.component.css']
})
export class TestesBackEndComponent implements OnInit {

  programadores!: Array<any>
  programador!: any
  cadastrando!: boolean

  constructor(private testesService: TestesService) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(): void {

    this.testesService.getAll().pipe(

      catchError((error) => {

        let programadores: Array<any> = new Array()

        programadores.push({ id: 1, nome: 'Programador1', qtd_linguagem: 2 })
        programadores.push({ id: 2, nome: 'Programador2', qtd_linguagem: 7 })
        programadores.push({ id: 3, nome: 'Programador3', qtd_linguagem: 15 })

        return of(programadores)

      })
    )

      .subscribe((response) => {

        console.log(response);

        this.programadores = response

      })
  }

  openForm(): void {

    this.programador = {};
    this.cadastrando = true
  }
  closeForm(): void {

    this.programador = {}
    this.cadastrando = false;
  }
  updateForm(programador: any): void {

    this.programador = programador;
    this.cadastrando = true;
  }

  create(): void {

    if(!this.validForm()){

      alert("Preencha os campos obrigatórios")
      return;
    }
    this.testesService.create(this.programador).pipe(catchError((error)=>{

      return of(error)
    }))
    .subscribe((response:any)=>{
      console.log(response);
      if(response){
        this.programadores.push(response);
        this.closeForm();

      }

    })
  }

  validForm():boolean{

    let valid:boolean = true
    if (!this.programador.nome) {

      valid=false;

    }
    return valid;
  }

  update():void{

    if(!this.validForm()){

      alert('Preencha os campos obrigatórios');
      return;
    }
    this.testesService.update(this.programador).pipe(
      catchError((error)=>{
        return of(error);
      })
    ).subscribe((response:any)=>{

      console.log(response);
      if (response) {

        this.programadores[this.programadores.indexOf(this.programador)] = response;

        this.closeForm();


      }

    })


  }
  delete(programador:any):void{

    this.testesService.delete(programador).pipe(
      catchError((error)=>{
        return of(false)
      })
    ).subscribe((response:any)=>{

      console.log(response);

      if (response) {

        this.programadores.splice(this.programadores.indexOf(programador),1)

      }

    })
  }




}
