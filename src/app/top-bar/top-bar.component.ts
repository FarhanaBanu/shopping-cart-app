import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent  {
noOfItemsAdded;
  constructor(private cartService:CartService) {
  }

}

