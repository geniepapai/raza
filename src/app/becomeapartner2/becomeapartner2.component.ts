import { Component, OnInit ,HostListener} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-becomeapartner2',
  templateUrl: './becomeapartner2.component.html',
  styleUrls: ['./becomeapartner2.component.css']
})
export class Becomeapartner2Component implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;
  
  cities = [
    {value: 'kolkata', viewValue: 'Kolkata'},
    {value: 'chennai', viewValue: 'Chennai'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Mumbai', viewValue: 'Mumbai'}
  ];

  countries = [
    {value: 'ind', viewValue: 'India'},
    {value: 'usa', viewValue: 'USA'},
    {value: 'pak', viewValue: 'Pakistan'},
    {value: 'ban', viewValue: 'Bangladesh'}
  ];

  

  fillerNav = [ 'INTERNATIONAL CALLING' , 'MOBILE TOP-UP' , 'CALL ME LOCAL' , 'SIGNUP / LOGIN' , 'RECHARGE' , 'LIVE CHAT' , 'CONTACT US' ];

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Become a partner');
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

}
