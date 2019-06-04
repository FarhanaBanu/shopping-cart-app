import { Injectable,EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient ) { }
  items = [];

    @Output() noOfItems = new EventEmitter();


  addToCart(product){

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
}