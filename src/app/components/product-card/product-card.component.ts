import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardContent,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';
import { Product } from 'src/app/api/product.interface';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, IonIcon, IonButton],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
}
