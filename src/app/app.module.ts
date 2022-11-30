import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WordsComponent} from './components/words/words.component';
import { WordComponent } from './components/word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
