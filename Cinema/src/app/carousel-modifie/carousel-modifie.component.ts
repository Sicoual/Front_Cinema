import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-modifie',
  templateUrl: './carousel-modifie.component.html',
  styleUrls: ['./carousel-modifie.component.css']
})
export class CarouselModifieComponent {
  currentSlide = 0;
  // partie a modifier pour aller chercher les affiches de la BDD
  // avec affichelien , for each
  // rajouter ensuite dans le html un onclick 
  //pour renvoyer vers infosfilm de l'id correspondant
  images = [
    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg',
    '6.jpg','7.jpg','8.jpg','9.jpg','10.jpg',
    '11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
  ];
  currentSlide2 = 0;
  slides2 = [
    'image1.jpg' ,
    'image2.jpg' ,
    'image3.jpg', 
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
      this.nextSlideBis();
    }, 4000);
  }

  nextSlide(): void {
    const totalSlides = this.images.length;
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
  }

  previousSlide(): void {
    const totalSlides = this.images.length;
    this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
  }

  getActiveClass(index: number): string {
    return this.currentSlide === index ? 'active' : '';
  }

  nextSlideBis(): void {
    const totalSlides2 = this.slides2.length;
    this.currentSlide2 = (this.currentSlide2 + 1) % totalSlides2;
  }

  previousSlideBis(): void {
    const totalSlides2 = this.slides2.length;
    this.currentSlide2 = (this.currentSlide2 - 1 + totalSlides2) % totalSlides2;
  }

  getActiveClassBis(index: number): string {
    return this.currentSlide2 === index ? 'active' : '';
  }

}
