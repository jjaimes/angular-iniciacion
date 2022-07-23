import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', ' Thor', 'Capitán América'];
  heroeBorrado: string = '';
  flgEmpty: boolean = false;

  borrarHeroe(){
    this.heroeBorrado =this.heroes.pop() || '';

    if( this.heroes.length < 1 )
      this.flgEmpty = true;

    console.log('flgEmpty=',this.flgEmpty);
  }
}
