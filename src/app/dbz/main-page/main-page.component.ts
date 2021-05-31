import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = { // valor por defecto para establecer en el componente
    nombre: ' ',
    poder: 0
  };

  /**
  get personajes(): Personaje[]{ // permite obtener del servicio
    return this.dbzService.personajes;
  }*/

  constructor( ){ // inyección de dependencias: inyección del servicio

  }


}
