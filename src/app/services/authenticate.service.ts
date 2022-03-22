import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }
 
  loginUser(credential){
    return new Promise((accept, reject)=>{
      if(credential.email == "william@test.com" && credential.password == '12345'){
        accept("Login Correcto")
      }else{
        reject("Usuario o contraseña incorrecta")
      }
    })
  }
  registerUser(userData){
    userData.password = btoa(userData.password)
    this.storage.create()
    return this.storage.set('user', userData)
  }
  
}
