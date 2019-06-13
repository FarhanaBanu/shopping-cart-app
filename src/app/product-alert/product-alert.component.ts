import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { products } from '../products';
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent implements OnInit {
@Input() product;
@Output() notify = new EventEmitter;
  private route: ActivatedRoute;
  constructor() { }

  ngOnInit() {

  }

}