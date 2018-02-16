import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';//importamos nuestra directiva
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import {Routes, RouterModule} from "@angular/router";
import { FundamentoComponent } from './fundamentos/fundamento.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { AutorizacionesService } from './services/autorizaciones.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { CrearnegocioComponent } from './crearnegocio/crearnegocio.component';
import { HttpModule } from "@angular/http";
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderByPipe } from './pipes/order-by.pipe';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {MyGuard} from "./services/my-guard.service";

const appRoutes:Routes = [
  {path:'',component: LugaresComponent},
  {path:'lugares',component: LugaresComponent},
  {path:'detalle/:id',component: DetalleComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'fundamentos',component: FundamentoComponent ,canActivate:[MyGuard]},
  {path:'crearnegocio/:id',component: CrearnegocioComponent,canActivate:[MyGuard]},
  {path:'login',component: LoginComponent},
  {path:'registro',component: RegistroComponent},
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
    OrderByPipe,
    LoginComponent,
    RegistroComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,//importamos el formsModule para usar la comunicacion twho data binding
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDahZw8eCN6uhFG-UEcU91G6eQpiWmgVWE'
    })
  ],
  providers: [LugaresService, AutorizacionesService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
