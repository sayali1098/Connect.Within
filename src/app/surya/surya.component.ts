import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surya',
  templateUrl: './surya.component.html',
  styleUrls: ['./surya.component.css'],
})
export class SuryaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageObject1: Array<object> = [
    {
      image: '../../assets/step1.jpg',
      thumbImage: '../../assets/step1.jpg',
      alt: 'alt of image',
      title: 'Step 1',
    },
    {
      image: '../../assets/step2.jpg',
      thumbImage: '../../assets/step2.jpg',
      title: 'Step 2',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step3.jpg',
      thumbImage: '../../assets/step3.jpg',
      title: 'Step 3',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step4.jpg',
      thumbImage: '../../assets/step4.jpg',
      title: 'Step 4',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step5.jpg',
      thumbImage: '../../assets/step5.jpg',
      title: 'Step 5',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step6.jpg',
      thumbImage: '../../assets/step6.jpg',
      title: 'Step 6',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step7.jpg',
      thumbImage: '../../assets/step7.jpg',
      title: 'Step 7',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step8.jpg',
      thumbImage: '../../assets/step8.jpg',
      title: 'Step 8',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step9.jpg',
      thumbImage: '../../assets/step9.jpg',
      title: 'Step 9',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step10.jpg',
      thumbImage: '../../assets/step10.jpg',
      title: 'Step 10',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step11.jpg',
      thumbImage: '../../assets/step11.jpg',
      title: 'Step 11',
      alt: 'Image alt',
    },
    {
      image: '../../assets/step12.jpg',
      thumbImage: '../../assets/step12.jpg',
      title: 'Step 12',
      alt: 'Image alt',
    },
  ];
}
