import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  filterOutline,
  bagHandleOutline,
  heartOutline,
  star,
  add,
  searchOutline,
  cartOutline,
  bagOutline,
  cubeOutline,
  eyeOutline,
  flashOutline,
  optionsOutline
} from 'ionicons/icons';

import { Product } from 'src/app/api/product.interface';
import { ApiService } from 'src/app/api/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
  ],
})
export class ShopPage implements OnInit {
  private api = inject(ApiService);

  selectedTab = 'All';
  searchText = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [
    'All',
    'Laptops',
    'Desktops',
    'Monitors',
    'Storage',
    'Networking',
    'Accessories',
    'Gaming',
    'Components',
  ];

  isLoading = true;

  constructor(private router: Router) {
    addIcons({ bagOutline, optionsOutline, heartOutline, eyeOutline, star, cartOutline, flashOutline, filterOutline, cubeOutline, bagHandleOutline, add, searchOutline });
  }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.isLoading = true;
    this.api.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load products', err);
        this.isLoading = false;
      },
    });
  }

  tabChanged(category: string) {
    this.selectedTab = category;
    this.applyFilters();
  }

  onSearch(event: any) {
    this.searchText = event.detail.value?.toLowerCase() || '';
    this.applyFilters();
  }

  addToWishlist(product: Product) {
    console.log('Wishlist:', product.title);
    // Implement wishlist logic
  }

  viewDetail(product: Product) {
    console.log('View detail:', product.title);
    this.router.navigate(['/product-detail']);
    // Navigate to product detail page
  }

  addToCart(product: Product) {
    console.log('Add to cart:', product.title);
    // Implement add to cart logic
  }

  buyNow(product: Product) {
    console.log('Buy now:', product.title);
    // Implement buy now logic
  }

  quickOrder(product: Product) {
    console.log('Quick order:', product.title);
    // Implement quick order logic
  }

  private mapCategory(title: string): string {
    const t = title.toLowerCase();
    if (t.includes('laptop')) return 'Laptops';
    if (t.includes('desktop') || t.includes('pc')) return 'Desktops';
    if (t.includes('monitor')) return 'Monitors';
    if (t.includes('ssd') || t.includes('hdd')) return 'Storage';
    if (t.includes('router') || t.includes('wifi')) return 'Networking';
    if (t.includes('keyboard') || t.includes('mouse')) return 'Accessories';
    if (t.includes('gaming')) return 'Gaming';
    return 'Components';
  }

  private applyFilters() {
    this.filteredProducts = this.products.filter((p) => {
      const matchesSearch = !this.searchText || p.title.toLowerCase().includes(this.searchText);
      const matchesCategory = this.selectedTab === 'All' || this.mapCategory(p.title) === this.selectedTab;
      return matchesSearch && matchesCategory;
    });
  }
}
