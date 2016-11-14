import {NgModule, NO_ERRORS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import "style.css";
import '../node_modules/primeng/resources/themes/omega/theme.css';
import '../node_modules/primeng/resources/primeng.min.css'
import {DialogModule} from "primeng/components/dialog/dialog";

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, JsonpModule, DialogModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
