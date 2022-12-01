import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {WordsComponent} from './components/words/words.component';
import { WordComponent } from './components/word/word.component';
import { AddRandomComponent } from './components/add-random/add-random.component';

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    WordComponent,
    AddRandomComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
