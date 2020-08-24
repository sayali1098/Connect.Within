import { Component, OnInit } from '@angular/core';
import { meditInterface } from '../interface/meditInterface';
import { well } from '../service/well';

@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.css'],
})
export class WellnessComponent implements OnInit {
  constructor() {}
  wells: meditInterface[];
  ngOnInit(): void {
    this.wells = well;
  }
}
