import { Injectable } from '@angular/core';

interface Product {
  name: string;
  imageUrl: string;
  price?: number;
  quantity?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    const existingProduct = this.items.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      product.quantity = 1;
      this.items.push(product);
    }
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}
