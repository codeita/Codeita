import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ApiService }  from './api.service';
import { FileList }  from './file-list.component';
import { DashboardComponent }  from './dashboard.component';
import { EditorComponent }  from './editor.component';


import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, DashboardComponent, FileList, EditorComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ ApiService ]
})
export class AppModule { }
