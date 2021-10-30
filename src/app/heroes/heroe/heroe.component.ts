import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent{
    nombre: string = 'Iroman';
    edad: number = 23;

    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }

ObtenerNombre(): string{
    return ` ${ this.nombre} - ${this.edad} `;
}

CambiarNombre():void{
    this.nombre = 'Spiderman';
}

CambiarEdad(){
    this.edad = 24;
}
}
