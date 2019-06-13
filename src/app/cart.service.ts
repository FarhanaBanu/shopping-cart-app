import { Injectable,EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient ) { }
  items = [];
  productNo = new Subject();
  price;

   noOfItems = 1;


  addToCart(product) {
    this.productNo.next(this.noOfItems++);
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }
  clearItems(){
    this.items=[];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  shipppingPrice(cost) {
    this.price = cost;
  }
}