import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";

@NgModule({
  imports: [ BrowserModule, FormsModule, ModalModule.forRoot(), BootstrapModalModule],
  declarations: [ AppComponent],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
