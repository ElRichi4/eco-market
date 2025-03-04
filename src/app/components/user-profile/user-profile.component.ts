import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service'; // Importar el servicio

interface Product {
  name: string;
  imageUrl: string;
  price?: number;
  quantity?: number;
}

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user: User = {
    name: 'Ricardo Pérez',
    email: 'ricardo.perez@example.com',
  };

  cartItems: Product[] = [];
  isPaymentFormVisible = false;
  cardNumber = '';
  expiryDate = '';
  cvv = '';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  showPaymentForm() {
    this.isPaymentFormVisible = true;
  }

  processPayment() {
    // Lógica para procesar el pago (simulada)
    alert('Pago procesado con éxito');
    this.cartService.clearCart();
    this.cartItems = [];
    this.isPaymentFormVisible = false;
  }
}
