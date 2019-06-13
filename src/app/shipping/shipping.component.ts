import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor( private cartService: CartService, private router: Router) {
     this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }
  shippingPrice(cost){
    this.router.navigateByUrl("/cart");

    // console.log(cost);
    this.cartService.shipppingPrice(cost);
  }
}