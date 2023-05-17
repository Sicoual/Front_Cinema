import { Component } from '@angular/core';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent {

  produits: any[] = [
    { nom: 'Affiche de cinema (120x160 cm)', prix: 19.99, image: 'assets/boutique/your_name.jpg' },
    { nom: 'Visite des coulisses du cinema', prix: 29.99, image: 'assets/boutique/clap.webp' },
    { nom: 'Carte cadeau', prix: 30.00, image: 'assets/boutique/carte_cadeau.png' },
    { nom: 'Box 5 films', prix: 19.99, image: 'assets/boutique/logo_box.PNG' },
    { nom: 'Box 10 films', prix: 28.99, image: 'assets/boutique/logo_box.PNG' },
    { nom: 'Box 15 films', prix: 37.99, image: 'assets/boutique/logo_box.PNG' },
    { nom: 'Goodies mystères', prix: 9.99, image: 'assets/boutique/4615282.png' }
  ];

  panier: any[] = [];
  nbProduitsPanier: number = 0;
  panierVisible: boolean = false;
  fenetreAchatVisible: boolean = false;

  ajouterAuPanier(produit: any) {
    this.panier.push(produit);
    this.nbProduitsPanier++;
  }

  afficherPanier() {
    this.panierVisible = !this.panierVisible;
  }

  calculerTotal(): number {
    let total = 0;
    for (let produit of this.panier) {
      total += produit.prix;
    }
    return total;
  }

  viderPanier() {
    this.panier = [];
    this.nbProduitsPanier = 0;
  }

  ouvrirFenetreAchat() {
    this.fenetreAchatVisible = true;
  }

  fermerFenetreAchat() {
    this.viderPanier();
    this.fenetreAchatVisible = false;
  }
}
