import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then(m => m.HomePage),
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('../pages/wishlist/wishlist.page').then(m => m.WishlistPage),
      },
      {
        path: 'shop',
        loadComponent: () =>
          import('../pages/shop/shop.page').then(m => m.ShopPage),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('../pages/notifications/notifications.page').then(m => m.NotificationsPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../pages/profile/profile.page').then(m => m.ProfilePage),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../pages/cart/cart.page').then(m => m.CartPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
