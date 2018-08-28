import { Component, OnInit, Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef,  MAT_DIALOG_DATA} from '@angular/material'; 

@Component({
  selector: 'app-homeuser-payment',
  templateUrl: './homeuser-payment.component.html',
  styleUrls: ['./homeuser-payment.component.css']
})
export class HomeuserPaymentComponent implements OnInit {

  mode = new FormControl('over');
  fillerNav = [ 'INTERNATIONAL CALLING' , 'MOBILE TOP-UP' , 'CALL ME LOCAL' , 'SIGNUP / LOGIN' , 'RECHARGE' , 'LIVE CHAT' , 'CONTACT US' ];

  selectedYear: any;
  selectedMonth: any;
  selectedCity: any;
  selectedCountry: any;

  months = [
    {value: 'jan', viewValue: 'January'},
    {value: 'feb', viewValue: 'February'},
    {value: 'march', viewValue: 'March'},
    {value: 'april', viewValue: 'April'}
  ];

  years = [
    {value: '1990', viewValue: '1990'},
    {value: '1991', viewValue: '1991'},
    {value: '1992', viewValue: '1992'},
    {value: '1992', viewValue: '1993'}
  ];

  constructor(public dialog: MatDialog , private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Payment');
  }

  redeemPromo() {
    this.dialog.open(RedeemPromoDialog);
  }

  

}

@Component({
  selector: 'redeem-promo',
  templateUrl: 'redeem-promo.html',
})

export class RedeemPromoDialog {

  constructor(
    public dialogRef: MatDialogRef<RedeemPromoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }

}
