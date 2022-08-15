import { Component } from "@angular/core";

@Component({
  selector:'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls:['../../app.component.css']
})

export class HeroeComponent{
  nombre:string ='Ironman';
  edad:number =43;

  get obtenerDatos(){
    return this.nombre.toUpperCase()+', ' +this.edad+' Años'
  }
  set cambiarDatos(name:string){
    this.nombre=name;
  }

}
