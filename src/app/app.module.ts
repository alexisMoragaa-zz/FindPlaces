import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
//importamos el formsModules
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//importamos el formsModule para usar la co
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
