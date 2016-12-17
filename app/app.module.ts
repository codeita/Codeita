import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FileList }  from './app.file-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FileList],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
