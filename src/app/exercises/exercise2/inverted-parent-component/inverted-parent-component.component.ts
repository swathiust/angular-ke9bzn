import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inverted-parent-component',
  templateUrl: './inverted-parent-component.component.html',
  styleUrls: ['./inverted-parent-component.component.css'],
})
export class InvertedParentComponentComponent implements OnInit {
  constructor() {}
  user = '';
  ngOnInit() {}

  addItem(newItem: string) {
    this.user = newItem;
  }
}
