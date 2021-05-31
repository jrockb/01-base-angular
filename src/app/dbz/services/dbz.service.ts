import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

  // tslint:disable-next-line: variable-name
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 10000
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]; // operador spread, rompe el paso de objetos por referencia para que no se manipule la variable privada
  }

  constructor() {}

  agregarPersonajes(personaje: Personaje): void{
    this._personajes.push(personaje);
  }

}
