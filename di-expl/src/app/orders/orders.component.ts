import {Component, Injector, NgZone} from '@angular/core';
import {OrdersService} from "./orders.service";
import {UsersService} from "../users/users.service";
import {ProductsService} from "../products/products.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [ OrdersService ]
})
export class OrdersComponent {
  constructor(
    public ordersService: OrdersService
  ) {
    console.log('OrdersComponent constructor')
    this.ordersService.init();
  }

}

