import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
//importamos el formsModules

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
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
