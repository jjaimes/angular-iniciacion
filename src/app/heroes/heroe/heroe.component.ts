import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Superman';
    edad  : number = 50

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return ` ${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman'; 
    }

    cambiarEdad() {
        this.edad += 1;
        return this.edad;
    }
}