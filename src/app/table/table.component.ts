import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  tableItems = [
    {
      id: 1,
      name: 'Matías',
      secondName: 'Ignacio',
      twitterAcc: '@matiasi',
    },
    {
      id: 2,
      name: 'Ignacio',
      secondName: 'Matias',
      twitterAcc: '@ignaciom',
    },
    {
      id: 3,
      name: 'Matías',
      secondName: 'Ignacio',
      twitterAcc: '@matiasi',
    },
    {
      id: 4,
      name: 'Ignacio',
      secondName: 'Matias',
      twitterAcc: '@ignaciom',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
