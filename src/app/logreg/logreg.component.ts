import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css'],
})
export class LogregComponent implements OnInit {
  images = [
    '../../assets/didsmile.jpg',
    '../../assets/womenn.jpg',
    '../../assets/medi.jpg',
    '../../assets/run.jpg',
    '../../assets/1280.jpg',
    '../../assets/pushup.jpg',
    '../../assets/laugh.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
