import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./pages/wishlist/wishlist.page').then( m => m.WishlistPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.page').then( m => m.CartPage)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./pages/notifications/notifications.page').then( m => m.NotificationsPage)
  },
  {
    path: 'shop',
    loadComponent: () => import('./pages/shop/shop.page').then( m => m.ShopPage)
  },
  {
    path: 'product-detail',
    loadComponent: () => import('./pages/product-detail/product-detail.page').then( m => m.ProductDetailPage)
  }
];
