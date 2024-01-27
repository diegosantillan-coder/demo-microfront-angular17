import { Routes } from '@angular/router';

export const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('mfShopping/ProductsModule').then((m) => m.ProductsModule) ,
  },
  {
  path: 'payment',
  loadChildren: () => import('mfPayment/PaymentComponent').then((m) => m.PaymentComponent) ,
  },

];
