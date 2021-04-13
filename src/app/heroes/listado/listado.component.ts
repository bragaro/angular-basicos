import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Hulk','Cap','Pantera','Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);

    // if(this.heroeBorrado === '') {
    //   this.heroeBorrado = 'No hay más elementos que borrar';
    // }
    
  }

}
