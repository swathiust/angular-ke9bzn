import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inverted-child-component',
  templateUrl: './inverted-child-component.component.html',
  styleUrls: ['./inverted-child-component.component.css'],
})
export class InvertedChildComponentComponent implements OnInit {
  constructor() {}
  @Output() newItemEvent = new EventEmitter<string>();
  ngOnInit() {}

  addNewUser(value: string) {
    this.newItemEvent.emit(value);
  }
}
