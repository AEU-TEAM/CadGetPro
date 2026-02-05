import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow,
  IonCol, IonIcon, IonButton, IonButtons, IonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline, cartOutline, heart, shareOutline, bagHandleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonHeader, IonTitle, IonToolbar,
    IonGrid, IonRow, IonCol, IonIcon, IonButton, IonButtons, IonText
  ]
})
export class WishlistPage {
  wishlistItems = [
    { id: 1, name: 'iPhone 15 Pro', price: 999, img: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/I9IBxtNJbz0whbLXbExk38dK08tRilTGKkYNlsA3.png', stock: true },
    { id: 2, name: 'Sony WH-1000XM5', price: 349, img: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/Yb1piHv3Ljfc43LlYe0RK1LxwL1WUZ1jpXqstxho.png', stock: true },
    { id: 3, name: 'Apple Watch Ultra', price: 799, img: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/nqWM5DJAMKNu9ralmrQoB7MTRuN0ynD9aseqD54d.png', stock: false },
  ];

  constructor() {
    addIcons({ trashOutline, cartOutline, heart, shareOutline, bagHandleOutline });
  }

  removeItem(id: number) {
    this.wishlistItems = this.wishlistItems.filter(item => item.id !== id);
  }
}
