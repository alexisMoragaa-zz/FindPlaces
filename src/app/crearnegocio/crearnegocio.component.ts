import { Component} from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crearnegocio',
  templateUrl: './crearnegocio.component.html',

})
export class CrearnegocioComponent{

    lugar:any = {} ;
  constructor(private lugaresServices: LugaresService){

  }
    guardarLugar(){
      this.lugar.id = Date.now();
        this.lugaresServices.guardarLugar(this.lugar);
    }


}
