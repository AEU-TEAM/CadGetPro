import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonIcon, IonButton, IonList, IonItemOptions, IonItemOption, IonItemSliding, IonItem, IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, removeOutline, trashOutline, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
    IonBackButton, IonIcon, IonButton, IonList, IonItemOptions, IonItemOption,
    IonItemSliding, IonItem, IonFooter
  ]
})
export class CartPage {
  cartItems = [
    { id: 1, name: 'iPhone 15 Pro', price: 999, qty: 1, img: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/I9IBxtNJbz0whbLXbExk38dK08tRilTGKkYNlsA3.png' },
    { id: 2, name: 'Sony XM5', price: 349, qty: 2, img: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/Bu04z64BCYaaDCVhrsBcmlgiPbxkKEdegvNg1B1o.png' },
    { id: 2, name: 'Sony XM5', price: 349, qty: 2, img: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/Bu04z64BCYaaDCVhrsBcmlgiPbxkKEdegvNg1B1o.png' },
    { id: 2, name: 'Sony XM5', price: 349, qty: 2, img: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/Bu04z64BCYaaDCVhrsBcmlgiPbxkKEdegvNg1B1o.png' }
  ];

  constructor() {
    addIcons({ addOutline, removeOutline, trashOutline, arrowForwardOutline });
  }

  get subtotal() {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  }

  updateQty(item: any, change: number) {
    if (item.qty + change > 0) {
      item.qty += change;
    }
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(i => i.id !== id);
  }
}
