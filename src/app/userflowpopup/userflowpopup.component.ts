import { Component, OnInit , Inject , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-userflowpopup',
  templateUrl: './userflowpopup.component.html',
  styleUrls: ['./userflowpopup.component.css']
})
export class UserflowpopupComponent implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;
  fillerNav: any;
  

  constructor(public dialog: MatDialog,private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('User Popup');
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.pageYOffset
      
      if(scrollPosition > 5){
        this.headerValue = 2;

      }else{
        this.headerValue = 1;
      }

    }

  globalCall(){
    const dialogRef1 = this.dialog.open(GlobalCallDialog);
    dialogRef1.afterClosed().subscribe(result => {
      console.log('test');
    });
  }

  promoCode(){
    this.dialog.open(PromoCodeDialog);
  }

  orderConfirmation(){
    this.dialog.open(OrderConfirmationDialog);
  }

  promoFailed(){
    this.dialog.open(PromoFailedDialog);
  }

  viewAllRates(){
    this.dialog.open(ViewAllRatesDialog);
  }

  


}

@Component({
  selector: 'global-call',
  templateUrl: 'global-call.html',
})
export class GlobalCallDialog {
  viewAllrate : any = 0;
  id : any;
  constructor(
    public dialogRef: MatDialogRef<GlobalCallDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
     }

  closeIcon(): void {
    this.dialogRef.close();
  }

  viewAllRatesTab(){
    this.viewAllrate = 1;
  }
  selectAmount(id: any) {
    this.id = id;
  }
}

@Component({
  selector: 'promo-code',
  templateUrl: 'promo-code.html',
})
export class PromoCodeDialog {
  constructor(
    public dialogRef: MatDialogRef<PromoCodeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'order-confirmation',
  templateUrl: 'order-confirmation.html',
})
export class OrderConfirmationDialog {
  constructor(
    public dialogRef: MatDialogRef<OrderConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'promo-failed',
  templateUrl: 'promo-failed.html',
})
export class PromoFailedDialog {
  constructor(
    public dialogRef: MatDialogRef<PromoFailedDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'view-all-rates',
  templateUrl: 'view-all-rates.html',
})
export class ViewAllRatesDialog{
  constructor(
    public dialogRef: MatDialogRef<ViewAllRatesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}




