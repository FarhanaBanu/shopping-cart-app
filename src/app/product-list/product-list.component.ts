import { Component, NgModule, Input } from '@angular/core';

import { products } from '../products';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent {
  products = products;
  constructor(public dialog: MatDialog) {}
  share() {
    window.alert('The product has been shared on!');
  }
   onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( DialogOverviewExampleDialogComponent, {
      width: '350px',
      height: '500'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {}

