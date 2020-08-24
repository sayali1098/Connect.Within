import { Component, OnInit } from '@angular/core';
import { meditInterface } from '../interface/meditInterface';
import { prana } from '../service/prana';

@Component({
  selector: 'app-pranas',
  templateUrl: './pranas.component.html',
  styleUrls: ['./pranas.component.css'],
})
export class PranasComponent implements OnInit {
  constructor() {}
  pranas: meditInterface[];
  ngOnInit(): void {
    this.pranas = prana;
  }
}
