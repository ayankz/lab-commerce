import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Lab-Commerce',
    loadComponent: () =>
      import('./pages/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: 'services',
    title: 'Services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (c) => c.ServicesComponent
      ),
  },
  {
    path: 'orders',
    title: 'Orders',
    loadComponent: () =>
      import('./pages/orders/orders.component').then((c) => c.OrdersComponent),
  },
  {
    path: 'contacts',
    title: 'Сontacts',
    loadComponent: () =>
      import('./pages/contacts/contacts.component').then(
        (c) => c.ContactsComponent
      ),
  },
  {
    path: 'auth',
    title: 'Authentication',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((c) => c.AuthComponent),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
