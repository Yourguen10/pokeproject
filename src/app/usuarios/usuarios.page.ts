import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ModalController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  characters = []
  page: number = 0
  itemsPerPage: number = 8

  constructor(
    private http: HttpClient,
    public modalController: ModalController

  ) { }

  ngOnInit() {
    this.characters = []
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/?limit=${this.itemsPerPage}&offset=${this.page}`)
      .subscribe(res => {
        // console.log(res);
        this.characters = res.results;
      })
  }

  pagination(type) {
    
    if (type == 'next') {
      if (this.page < 16) {
        this.page += 8;
        if (this.page == 16) {
          this.itemsPerPage = 4;
        } else {
          this.itemsPerPage = 8;
        }
        this.ngOnInit()

      }

    } else {
      if (this.page > 0) {
        if (this.page == 16) {
          this.itemsPerPage = 8;
        }
        this.page -= 8;
        this.ngOnInit()
      }
    }

    console.log('this.page',this.page)
  }

  async viewCharacter(character) {
    // console.log(character)
    const modal = await this.modalController.create({
      component: ProfilePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'character': character
      },
      swipeToClose: true
    });
    return await modal.present();

  }

}
