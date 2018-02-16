import { Component, OnInit } from '@angular/core';
import {AutorizacionesService} from '../services/autorizaciones.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro:any = {};
  constructor(private Auth : AutorizacionesService) {
 }

  registrar(){
    this.Auth.registro(this.registro.email , this.registro.password);
  }

  ngOnInit() {
  }

}
