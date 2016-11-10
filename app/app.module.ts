import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import "style.css";
import { DialogModule }  from 'primeng/components/dialog/dialog'

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, JsonpModule, DialogModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
