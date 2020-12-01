import { BoundElementPropertyAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  title: string = 'Timer';
  minutos: number;
  segundos: number;
  Paused: boolean;
  buttonLabel: string;

  tarefas = [];

  item: any = '';
  ocultarLista: boolean = true;
  ocultarEdit: boolean = true;

  aggTarefa():void {
    this.ocultarLista = false;
    this.tarefas.push(this.item);
    this.item = '';
  }

  editTarefa(): void {

  }

  deletTarefa(i) {
    //this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
    var resposta = confirm('Deseja eliminar tarefa?');
    if (resposta) {
      this.tarefas.splice( i, 1)
    }
  }


  constructor() {
    this.contar();
    setInterval(() => this.tick(), 1000);
  }

  contar(): void {
    this.minutos = 1;
    this.segundos = 0;
    this.buttonLabel = 'Empezar';
    this.iniciarPomo();
  }


  private tick(): void {
    if(!this.Paused) {
      this.buttonLabel = 'Detener';

      if(--this.segundos < 0) {
        this.segundos = 59;
        if(--this.minutos < 0) {
          this.minutos = 24;
          this.segundos = 59;
        }
      }
    }
  }

  iniciarPomo(): void{
    this.Paused = !this.Paused;
    if(this.minutos < 24 || this.segundos < 59) {
    this.buttonLabel = this.Paused ? 'Recomeçar' : 'Detener';

    }
  }


  ngOnInit(): void {
  }

}
