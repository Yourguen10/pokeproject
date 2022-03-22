import { Component } from '@angular/core';
import { PokeappService } from '../services/pokeapp.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  names = [{}, {}, {}, {}, {}, {}, {}, {}]
 
  constructor(private pokeService: PokeappService) {}

  ionViewDidEnter(){
    this.pokeService.getCharacter().then((newCharacter)=>{
      this.names = newCharacter.name.items
    })
  }

  

}
