import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroeBorrado:string='';
  band:boolean=false;
  heroes:string[]=['Goku','Vegetta','Gohan','Trunks'];

  borrarHeroeUltimo(){
    this.heroeBorrado=this.heroes[this.heroes.length-1];
    this.heroes.length-=1;
    this.band=true;
  }
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    this.band=true;
  }

}
