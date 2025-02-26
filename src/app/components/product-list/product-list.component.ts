import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  featuredProducts = [
    { name: 'Aceite', imageUrl: 'assets/images/aceite.jpg', price: 9 },
    { name: 'Set Biodegradable', imageUrl: 'assets/images/set.jpg', price: 11 },
    { name: 'Mandarinas', imageUrl: 'assets/images/mandarina.jpg', price: 4 },
    { name: 'Naranzanas', imageUrl: 'assets/images/Naranzana.jpg', price: 5 }
  ];

  monthlyProducts = [
    { name: 'Plátanos Verdes', imageUrl: 'assets/images/Plátanos Verdes.jpg', price: 6 },
    { name: 'Kiwis', imageUrl: 'assets/images/Kiwi.jpg', price: 7 },
    { name: 'Cesta Biodegradable', imageUrl: 'assets/images/cesta.jpg', price: 20 },
    { name: 'Limas', imageUrl: 'assets/images/lima.jpg', price: 3 }
  ];

  seasonalProducts = [
    { name: 'Fresas', imageUrl: 'assets/images/fresa.jpeg', price: 8 },
    { name: 'Granadas', imageUrl: 'assets/images/granadas.png', price: 9 },
    { name: 'Peras', imageUrl: 'assets/images/peras.jpg', price: 5 },
    { name: 'Pomelos', imageUrl: 'assets/images/pomelo.jpg', price: 7 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: { name: string; imageUrl: string; price?: number }) {
    this.cartService.addToCart(product);
    alert(`${product.name} añadido a la cesta.`);
  }
}
