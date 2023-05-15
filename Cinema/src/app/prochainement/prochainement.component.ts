import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prochainement',
  templateUrl: './prochainement.component.html',
  styleUrls: ['./prochainement.component.css'],
})
export class ProchainementComponent {
  constructor(private http: HttpClient, private router: Router) {}

  imageFiles: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  ngOnInit() {
    this.http.get<string[]>('assets/imageFilmAVenir/images.json', { responseType: 'json' })
    .subscribe({
      next: (files) => {this.imageFiles = files},
      error: (error) => {console.error('Erreur:', error)},
      complete: () => {console.log('Success')},
    });
  }
}
