import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileID: string;
  @Input() character : any = {};
  pokemon: any = {};

  constructor(
    private http: HttpClient,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('modal',this.character)
    this.http.get(this.character.url)
      .subscribe(res=>{
        // console.log(res);
        this.pokemon =  res;
        // console.log(this.pokemon.abilities)
      })

    
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
