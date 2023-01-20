import { Injectable } from '@angular/core';
import {UsersService} from "../users/users.service";
import {ProductsService} from "../products/products.service";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
  ) {
  }

  init() {
    this.usersService.log();
  }
}
