import {Component} from '@angular/core';
import {IDictionary} from "./interfaces";
import {DicService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word:IDictionary;
  constructor(private dicService:DicService) { }

  catch(event: IDictionary) {
    this.dicService.getById(event.id).subscribe(value => this.word = value)
  }

}
