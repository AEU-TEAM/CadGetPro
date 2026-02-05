import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge,
  IonPopover,
  IonLabel,
  IonItem,
  IonList
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  notificationsOutline,
  heartOutline,
  addCircle,
  phonePortraitOutline,
  laptopOutline,
  headsetOutline,
  watchOutline,
  star,
  personOutline,
  receiptOutline,
  logOutOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

import { Router } from '@angular/router';
import { Product } from 'src/app/api/product.interface';
import { ApiService } from 'src/app/api/services/api.service';

interface Category {
  name: string;
  icon: string; // icon variable from ionicons
  active: boolean;
}

@Component({
  selector: 'app-home2',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // 4. VERY IMPORTANT: Add this line!
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    FormsModule,
    IonBadge,
    IonPopover,
    IonLabel,
    IonItem,
    IonList
  ],
})
export class HomePage implements OnInit {
  private api = inject(ApiService);

  // Categories with proper icon variables
  categories: Category[] = [
    { name: 'Phones', icon: 'phone-portrait-outline', active: true },
    { name: 'Laptops', icon: 'laptop-outline', active: false },
    { name: 'Audio', icon: 'headset-outline', active: false },
    { name: 'Watches', icon: 'watch-outline', active: false },
  ];

  // Missing data for the slider
  promoSlides = [
    { badge: 'Limited Offer', title: 'Summer', subtitle: 'Gadget Sale', ctaText: 'Shop Now', image: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/4yokJSO8AeN9WZeaie6vK02whu4eBsUdHZzmTHhb.png' }
  ];

  bestSellers: Product[] = [];
  popularProducts: Product[] = [];
  isLoading = true;
  searchText = '';

  constructor(private router: Router) {
    addIcons({
      personOutline,
      chevronForwardOutline,
      receiptOutline,
      logOutOutline,
      notificationsOutline,
      heartOutline,
      addCircle,
      star,
      phonePortraitOutline,
      laptopOutline,
      headsetOutline,
      watchOutline,
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  // ----------------------------
  // Product Loading
  // ----------------------------
  private loadProducts(): void {
    this.isLoading = true;
    this.api.getProducts(0, 12).subscribe({
      next: (res) => {
        this.bestSellers = res.products.slice(0, 4);
        this.popularProducts = res.products;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load products', err);
        this.isLoading = false;
      },
    });
  }

  // ----------------------------
  // Category selection
  // ----------------------------
  selectCategory(selectedCat: Category): void {
    this.categories.forEach(cat => cat.active = false);
    selectedCat.active = true;
    console.log('Category changed to:', selectedCat.name);
    this.filterProductsByCategory(selectedCat.name);
  }

  private filterProductsByCategory(category: string): void {
    const lowerCategory = category.toLowerCase();
    this.popularProducts = this.bestSellers.filter(p =>
      p.title.toLowerCase().includes(lowerCategory)
    );
  }

  // ----------------------------
  // Navigation
  // ----------------------------
  goToProfile(): void {
    this.router.navigate(['/profile']);
    console.log('Go to profile');
  }

  goToOrders(): void {
    console.log('Navigate to order histories');
  }

  logout(): void {
    console.log('User logout');
  }

  // ----------------------------
  // Product Actions
  // ----------------------------
  addToWishlist(product: Product): void {
    console.log('Add to wishlist:', product.title);
  }

  viewDetail(product: Product): void {
    console.log('View detail:', product.title);
  }

  addToCart(product: Product): void {
    console.log('Add to cart:', product.title);
  }

  buyNow(product: Product): void {
    console.log('Buy now:', product.title);
  }

  // ----------------------------
  // Search Filtering
  // ----------------------------
  onSearchChange(event: any): void {
    this.searchText = event.detail.value?.toLowerCase() || '';
    this.popularProducts = this.bestSellers.filter(p =>
      p.title.toLowerCase().includes(this.searchText)
    );
  }
}
