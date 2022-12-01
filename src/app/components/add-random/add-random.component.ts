import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {DicService} from "../../services";
import {INewData} from "../../interfaces";

@Component({
  selector: 'app-add-random',
  templateUrl: './add-random.component.html',
  styleUrls: ['./add-random.component.css']
})
export class AddRandomComponent implements OnInit {
  newData: INewData;
  form: FormGroup;

  constructor(private dicService: DicService) {
    this.form = new FormGroup({
      query: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  add(): void {
    if (this.form.value.query !== '') {
      this.newData = {words: this.form.value.query};
      this.dicService.create(this.newData).subscribe();
      window.location.reload();
    } else {
    }

  }
}
