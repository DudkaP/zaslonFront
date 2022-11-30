import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IDictionary} from "../../interfaces";

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input()
  word:IDictionary;

  @Output()
  wordEmitt = new EventEmitter<IDictionary>();

  constructor() { }

  ngOnInit(): void {
  }
  emitt():void {
    this.wordEmitt.emit(this.word);
  }
}
