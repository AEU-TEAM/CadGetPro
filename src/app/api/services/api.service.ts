import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedProduct } from '../product.interface';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl =
    'https://api-ecommerce.hostinger.com/store/store_01J7RB3TDWGHWMFFMXVA9D54V4/products';
  constructor(private http: HttpClient) {}

  getProducts(offset = 0, limit = 100) {
    return this.http.get<PaginatedProduct>(
      `${this.baseUrl}?offset=${offset}&limit=${limit}`
    );
  }
}
