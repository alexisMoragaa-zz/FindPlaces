import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
//importamos el formsModules
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';//importamos nuestra directiva
import {ContarClicksDirective} from './directives/contar-clicks.directive';



@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,//declaramos la importacion
    ContarClicksDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,//importamos el formsModule para usar la comunicacion twho data binding
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZOmCYgJK9UOeViINSFNtZ8HmyI23IalA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
