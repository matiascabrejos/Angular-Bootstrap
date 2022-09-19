import { Component, OnInit } from '@angular/core';

import { ListItem } from '../shared/listitem.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listItems: ListItem[] = [
    new ListItem('Keyboard', 5),
    new ListItem('Headset', 10),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(listItem: ListItem) {
    this.listItems.push(listItem);
  }
}
