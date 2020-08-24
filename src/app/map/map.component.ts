import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  texto: string = 'Visit us here!';
  lat = 18.510147;
  lng = 73.928424;

  onChoseLocation(event) {
    console.log(event);
  }
  // zoom: number = 15;
  constructor() {}

  ngOnInit(): void {}
}
