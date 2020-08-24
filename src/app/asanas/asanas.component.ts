import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asanas',
  templateUrl: './asanas.component.html',
  styleUrls: ['./asanas.component.css'],
})
export class AsanasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
}
