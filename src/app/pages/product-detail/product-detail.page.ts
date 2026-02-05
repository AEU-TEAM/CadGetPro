// src/app/page/product-detail/product-detail.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage {
  product = {
    name: 'Awesome Product',
    totalSold: 1245,
    variants: ['Small', 'Medium', 'Large'],
  };

  selectedVariant = 'Small';

  reviews = [
    {
      user: 'Alex',
      comment: 'Great quality, fast delivery!',
    },
    {
      user: 'Sam',
      comment: 'Worth the price 👍',
    },
  ];

  relatedProducts = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
    { id: 4, name: 'Product D' },
  ];
}

