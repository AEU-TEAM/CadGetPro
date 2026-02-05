import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel,
  IonSearchbar, IonGrid, IonRow, IonCol, IonIcon, IonButton, IonBadge
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { filterOutline, shoppingBagOutline, heartOutline, star, add } from 'ionicons/icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel,
    IonSearchbar, IonGrid, IonRow, IonCol, IonIcon, IonButton, IonBadge, CommonModule, FormsModule
  ]
})
export class ShopPage {
  selectedTab: string = 'all';

  products = [
    { name: 'iPhone 15 Pro', price: 999, category: 'phones', img: 'assets/iphone.png', rating: 4.8 },
    { name: 'MacBook M2', price: 1299, category: 'laptops', img: 'assets/mac.png', rating: 4.9 },
    { name: 'AirPods Max', price: 549, category: 'audio', img: 'assets/pods.png', rating: 4.7 },
    { name: 'Apple Watch', price: 399, category: 'watches', img: 'assets/watch.png', rating: 4.6 },
  ];

  filteredProducts = [...this.products];

  constructor() {
    addIcons({ filterOutline, shoppingBagOutline, heartOutline, star, add });
  }

  tabChanged(event: any) {
    this.selectedTab = event.detail.value;
    if (this.selectedTab === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(p => p.category === this.selectedTab);
    }
  }
}
