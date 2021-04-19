import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public fondo = require("../../../assets/images/main.jpg");

  constructor() { }

  ngOnInit(): void {
  }

}
