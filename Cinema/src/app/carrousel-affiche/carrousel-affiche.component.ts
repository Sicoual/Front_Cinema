import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel-affiche',
  templateUrl: './carrousel-affiche.component.html',
  styleUrls: ['./carrousel-affiche.component.css']
})
export class CarrouselAfficheComponent {
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

   slides2 = [
    
     { id: 1, image: '' },
     { id: 2, image: 'assets/imageFilmAVenir/image1.jpg' },
     { id: 3, image: 'assets/imageFilmAVenir/image2.jpg' },
     { id: 4, image: 'assets/imageFilmAVenir/image3.jpg' }
   ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    const totalSlides = this.images.length;
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
  }

  getActiveClass(index: number): string {
    return this.currentSlide === index ? 'active' : '';
  }
}
