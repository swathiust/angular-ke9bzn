import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  // @Output() newItemEvent = new EventEmitter<string>();
 username = '';
  ngOnInit() {}

  addNewUser(value: string) {
    this.username = value;
  }
}
