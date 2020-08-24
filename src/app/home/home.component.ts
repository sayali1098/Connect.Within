import { Component, OnInit } from '@angular/core';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = [
    '../../assets/didsmile.jpg',
    '../../assets/womenn.jpg',
    '../../assets/medi.jpg',
    '../../assets/run.jpg',
    '../../assets/1280.jpg',
    '../../assets/pushup.jpg',
    '../../assets/laugh.jpg',
    '../../assets/cov.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
