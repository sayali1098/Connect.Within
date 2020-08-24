import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mudras',
  templateUrl: './mudras.component.html',
  styleUrls: ['./mudras.component.css'],
})
export class MudrasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageObject: Array<object> = [
    {
      image: '../../assets/gyan-mudra.jpg',
      thumbImage: '../../assets/gyan-mudra.jpg',
      alt: 'alt of image',
      title: 'Gyan Mudra',
    },
    {
      image: '../../assets/vayu-mudra.jpg',
      thumbImage: '../../assets/vayu-mudra.jpg',
      title: 'Vayu Mudra',
      alt: 'Image alt',
    },
    {
      image: '../../assets/akash-mudra.jpg',
      thumbImage: '../../assets/akash-mudra.jpg',
      title: 'Akash Mudra',
      alt: 'Image alt',
    },
    {
      image: '../../assets/shunya-2.jpg',
      thumbImage: '../../assets/shunya-2.jpg',
      title: 'Shunya Mudra',
      alt: 'Image alt',
    },
    {
      image: '../../assets/prana-mudra.jpg',
      thumbImage: '../../assets/prana-mudra.jpg',
      title: 'Prana Mudra',
      alt: 'Image alt',
    },
    {
      image: '../../assets/varun.jpg',
      thumbImage: '../../assets/varun.jpg',
      title: 'Varun Mudra',
      alt: 'Image alt',
    },
    {
      image: '../../assets/vajra-mudra.jpg',
      thumbImage: '../../assets/vajra-mudra.jpg',
      title: 'Vajra Mudra',
      alt: 'Image alt',
    },
    {
      image: '../../assets/garuda-mudra.jpg',
      thumbImage: '../../assets/garuda-mudra.jpg',
      title: 'Garuda Mudra',
      alt: 'Image alt',
    },
    {
      image: '../../assets/back-mudra.jpg',
      thumbImage: '../../assets/back-mudra.jpg',
      title: 'Back Mudra',
      alt: 'Image alt',
    },
    {
      image: '../../assets/bhramara-mudra.jpg',
      thumbImage: '../../assets/bhramara-mudra.jpg',
      title: 'Bhramara Mudra',
      alt: 'Image alt',
    },
  ];
}
