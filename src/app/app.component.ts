import {Component} from '@angular/core';
import {IDictionary} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word:IDictionary;

  catch(event: IDictionary) {
    console.log('top ' + event.words);
    this.word = event;
  }
}
