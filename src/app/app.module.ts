import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
//importamos el formsModules
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';//importamos nuestra directiva
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import {Routes, RouterModule} from "@angular/router";
import { FundamentoComponent } from './fundamentos/fundamento.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes:Routes = [
  {path:'',component: LugaresComponent},
  {path:'lugares',component: LugaresComponent},
  {path:'detalle/:id',component: DetalleComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'fundamentos',component: FundamentoComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,//declaramos la importacion
    ContarClicksDirective,
    FundamentoComponent,
    LugaresComponent,
    DetalleComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,//importamos el formsModule para usar la comunicacion twho data binding
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZOmCYgJK9UOeViINSFNtZ8HmyI23IalA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
