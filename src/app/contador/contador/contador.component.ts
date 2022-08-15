import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector:'app-contador',
  template:`

    <div class="cont">
      <h2>Contador</h2>
      <h3>La base es:<strong> {{base}} </strong></h3>
      <button (click)="acumular(-base)">{{-base}} </button>
      <button (click)="acumular(-1) ">-1</button>
      <span>{{numero}} </span>
      <button (click)="acumular(1)">+1</button>
      <button (click)="acumular(base)">{{base}} </button>
    </div>



  `,
  styleUrls: ['../../app.component.css']

})
export class ContadorComponent{
  title = 'bases';
  numero:number=10;
  base:number=5;

  acumular(number:number){
    this.numero+=number;
  }
}
