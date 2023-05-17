import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  formData: any = {};
  modalMessage: string = '';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  submitForm(): void {
    // Vérif si tous les champs sont remplis
    if (this.formData.salutation && this.formData.firstName && this.formData.lastName && this.formData.email) {
      console.log(this.formData);
      // Afficher la fenêtre modale après la soumission du formulaire
      this.openModal();
    } else {
      // Afficher une fenêtre d'alerte demandant à remplir tous les champs
      alert("Veuillez remplir tous les champs du formulaire.");
    }
  

    // Afficher la fenêtre modale après la soumission du formulaire
    this.openModal();
  }

  openModal(): void {
    const modal = this.el.nativeElement.querySelector('#modalWindow');
    this.renderer.setStyle(modal, 'display', 'block');
  }

  closeModal(): void {
    const modal = this.el.nativeElement.querySelector('#modalWindow');
    this.renderer.setStyle(modal, 'display', 'none');

    
      setTimeout(() => {
        window.location.href = 'accueil'; 
      }, 3000);
    }
  }



