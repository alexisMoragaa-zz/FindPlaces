import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';//importamos nuestra directiva
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import {Routes, RouterModule} from "@angular/router";
import { FundamentoComponent } from './fundamentos/fundamento.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from'angularfire2/database';
import { environment } from '../environments/environment';
import { CrearnegocioComponent } from './crearnegocio/crearnegocio.component';
import { HttpModule } from "@angular/http";
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes:Routes = [
  {path:'',component: LugaresComponent},
  {path:'lugares',component: LugaresComponent},
  {path:'detalle/:id',component: DetalleComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'fundamentos',component: FundamentoComponent},
  {path:'crearnegocio/:id',component: CrearnegocioComponent},
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
    CrearnegocioComponent,
    LinkifystrPipe,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,//importamos el formsModule para usar la comunicacion twho data binding
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDahZw8eCN6uhFG-UEcU91G6eQpiWmgVWE'
    })
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
