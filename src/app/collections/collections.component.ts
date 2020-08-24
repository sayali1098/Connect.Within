import { Component, OnInit } from '@angular/core';
import { meditInterface } from '../interface/meditInterface';
import { prana } from '../service/prana';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
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

  imageObject2: Array<object> = [
    {
      image: '../../assets/tadasana.jpg',
      thumbImage: '../../assets/tadasana.jpg',
      alt: 'alt of image',
      title: 'Tadasana',
    },
    {
      image: '../../assets/Padangusthasana.jpg',
      thumbImage: '../../assets/Padangusthasana.jpg',
      title: 'Padangusthasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Vrikshasana.jpg',
      thumbImage: '../../assets/Vrikshasana.jpg',
      title: 'Vrikshasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Adho.jpg',
      thumbImage: '../../assets/Adho.jpg',
      title: 'Adho Mukha Svanasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Trikonasana.jpg',
      thumbImage: '../../assets/Trikonasana.jpg',
      title: 'Trikonasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Garudasana.jpg',
      thumbImage: '../../assets/Garudasana.jpg',
      title: 'Garudasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Virabha.jpg',
      thumbImage: '../../assets/Virabha.jpg',
      title: 'Virabhadrasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Hasta.jpg',
      thumbImage: '../../assets/Hasta.jpg',
      title: 'Hastapadasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Ardha.jpg',
      thumbImage: '../../assets/Ardha.jpg',
      title: 'Ardha Chandrasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Pari.jpg',
      thumbImage: '../../assets/Pari.jpg',
      title: 'Parighasana',
      alt: 'Image alt',
    },
  ];

  imageObject3: Array<object> = [
    {
      image: '../../assets/sukhasan.jpg',
      thumbImage: '../../assets/sukhasan.jpg',
      alt: 'Image alt',
      title: 'Sukhasan',
    },
    {
      image: '../../assets/Vajrasana.jpg',
      thumbImage: '../../assets/Vajrasana.jpg',
      title: 'Vajrasan',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Siddhasana.jpg',
      thumbImage: '../../assets/Siddhasana.jpg',
      title: 'Siddhasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/virasana.jpg',
      thumbImage: '../../assets/virasana.jpg',
      title: 'Virasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Padmasana.jpg',
      thumbImage: '../../assets/Padmasana.jpg',
      title: 'Padmasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Anant.jpg',
      thumbImage: '../../assets/Anant.jpg',
      title: 'Anantasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Bitilasana.jpg',
      thumbImage: '../../assets/Bitilasana.jpg',
      title: 'Bitilasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/naukasana.jpg',
      thumbImage: '../../assets/naukasana.jpg',
      title: 'Naukasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/matsyasana.jpg',
      thumbImage: '../../assets/matsyasana.jpg',
      title: 'Step 7',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Gomukh.jpg',
      thumbImage: '../../assets/Gomukh.jpg',
      title: 'Gomukhasana',
      alt: 'Image alt',
    },
  ];

  imageObject4: Array<object> = [
    {
      image: '../../assets/sukhasan.jpg',
      thumbImage: '../../assets/sukhasan.jpg',
      alt: 'Image alt',
      title: 'Sukhasan',
    },
    {
      image: '../../assets/Vajrasana.jpg',
      thumbImage: '../../assets/Vajrasana.jpg',
      title: 'Vajrasan',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Siddhasana.jpg',
      thumbImage: '../../assets/Siddhasana.jpg',
      title: 'Siddhasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/virasana.jpg',
      thumbImage: '../../assets/virasana.jpg',
      title: 'Virasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Padmasana.jpg',
      thumbImage: '../../assets/Padmasana.jpg',
      title: 'Padmasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Anant.jpg',
      thumbImage: '../../assets/Anant.jpg',
      title: 'Anantasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Bitilasana.jpg',
      thumbImage: '../../assets/Bitilasana.jpg',
      title: 'Bitilasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/naukasana.jpg',
      thumbImage: '../../assets/naukasana.jpg',
      title: 'Naukasana',
      alt: 'Image alt',
    },
    {
      image: '../../assets/matsyasana.jpg',
      thumbImage: '../../assets/matsyasana.jpg',
      title: 'Step 7',
      alt: 'Image alt',
    },
    {
      image: '../../assets/Gomukh.jpg',
      thumbImage: '../../assets/Gomukh.jpg',
      title: 'Gomukhasana',
      alt: 'Image alt',
    },
  ];
  constructor() {}
  pranas: meditInterface[];
  ngOnInit(): void {
    this.pranas = prana;
  }
}
