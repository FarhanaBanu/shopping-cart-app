import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
items: any[];
 checkoutForm;
  shipCost: unknown = 0;
  constructor( private cartService: CartService , private formBuilder: FormBuilder) {
  

   }

  ngOnInit() {
this.items = this.cartService.getItems();
this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
    this.shipCost = this.cartService.price;
    console.log(this.shipCost);
    // this.shipCost=this.cartService.price.subscribe(result => {
    //   this.shipCost = result;
    //   console.log(this.shipCost);
    // });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearItems();
    this.checkoutForm.reset();

  }
}