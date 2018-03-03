import { Component } from '@angular/core';
import {AutorizacionesService} from "./services/autorizaciones.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  name = null;
  image = null;
  constructor(private authservice:AutorizacionesService){
    this.authservice.isLogged()
      .subscribe((result)=>{
        if(result &&  result.uid){
          this.loggedIn=true;
          this.name = authservice.getName();
          this.image = authservice.getImage();
        }else{
          this.loggedIn=false;
        }
      },(error)=>{
        this.loggedIn=false;
      })
  }

  logout(){
    this.authservice.logout();
  }
}
