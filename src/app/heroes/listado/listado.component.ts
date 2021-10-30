import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroes(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
 
}
