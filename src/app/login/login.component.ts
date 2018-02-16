import { Component, OnInit } from '@angular/core';
import {AutorizacionesService} from '../services/autorizaciones.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginParams:any = {};
  constructor(private Auth:AutorizacionesService) {   }

   login(){
     this.Auth.login(this.loginParams.email,this.loginParams.password);
     }
     facebookLogin(){
       this.Auth.FacebookLogin();
     }

  ngOnInit() {
  }

}
