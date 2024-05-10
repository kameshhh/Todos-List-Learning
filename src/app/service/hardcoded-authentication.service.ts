import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string,password: string){
    console.log('Before '+ this.isUserLoggedIn());
    if(username==="kamesh" && password==="dummy"){
      sessionStorage.setItem('authenticaterUser',username) ;   
      console.log('After '+ this.isUserLoggedIn());
      return true;

    }
    return false;
  }

  isUserLoggedIn(){
      let user = sessionStorage.getItem('authenticaterUser');
      if (user !== null) {
          return true;  // User is logged in
      } else {
          return false; // User is not logged in
      }
  
  }



}
