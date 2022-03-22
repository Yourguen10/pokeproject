import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeappService {

  constructor() { }
  getCharacter(){
    return fetch("https://pokeapi.co/api/v2/pokemon/").then(res=> res.json())
  }
}
