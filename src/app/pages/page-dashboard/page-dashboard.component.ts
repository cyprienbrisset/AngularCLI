import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.sass']
})
export class PageDashboardComponent implements OnInit {

  public childs: any

  constructor() { }

  ngOnInit(): void {
    this.childs = [
      {id: 4, name: 'demo'},
      {id: 4, name: 'demo'},
      {id: 4, name: 'demo'},
      {id: 4, name: 'demo'},
      {id: 4, name: 'demo'},
      {id: 4, name: 'demo'},
      {id: 4, name: 'demo'},
      {id: 4, name: 'demo'},
      {id: 4, name: 'demo'}
    ]
  }

}
