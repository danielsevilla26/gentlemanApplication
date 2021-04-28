import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logo = require("@assets/images/logo.png");

  constructor() { }

  ngOnInit(): void {
  }

}
