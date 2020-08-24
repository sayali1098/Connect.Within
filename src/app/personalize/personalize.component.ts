import { Component, OnInit } from '@angular/core';
import { meditInterface } from '../interface/meditInterface';
import { meditData } from '../service/meditData';
import { yogaData } from '../service/yogaData';
import { prega } from '../service/package';

@Component({
  selector: 'app-personalize',
  templateUrl: './personalize.component.html',
  styleUrls: ['./personalize.component.css'],
})
export class PersonalizeComponent implements OnInit {
  constructor() {}

  medits: meditInterface[];
  yoga: meditInterface[];
  pregs: meditInterface[];

  ngOnInit(): void {
    this.medits = meditData;
    this.yoga = yogaData;
    this.pregs = prega;
  }
}
