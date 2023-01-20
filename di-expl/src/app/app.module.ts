import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module')
          .then(m => m.OrdersModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module')
          .then(m => m.UsersModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module')
          .then(m => m.ProductsModule)
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
