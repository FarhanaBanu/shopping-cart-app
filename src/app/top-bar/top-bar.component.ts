import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent  {
noOfItemsAdded: any = 0;
  constructor(private cartService: CartService) {
    this.cartService.productNo.subscribe(result => this.noOfItemsAdded = result);
  }

}

