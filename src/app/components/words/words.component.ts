import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DicService} from "../../services";
import {IDictionary} from "../../interfaces";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  words:IDictionary[];

  @Output()
  wordsEmitt = new EventEmitter<IDictionary>()

  constructor(private dicService:DicService) { }

  ngOnInit(): void {
    this.dicService.getAllData().subscribe(value => this.words = value);

  }
  catchWordEmitter(event:IDictionary):void {
    this.wordsEmitt.emit(event);
  }

}
