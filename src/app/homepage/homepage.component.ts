import { Component, OnInit , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  mode = new FormControl('over');
  cities = [
    {value: 'kolkata', viewValue: 'Kolkata'},
    {value: 'chennai', viewValue: 'Chennai'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Mumbai', viewValue: 'Mumbai'}
  ];
  fillerNav = [ 'INTERNATIONAL CALLING' , 'MOBILE TOP-UP' , 'CALL ME LOCAL' , 'SIGNUP / LOGIN' , 'RECHARGE' , 'LIVE CHAT' , 'CONTACT US' ];
  headerValue : number = 1;

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 2}; 



  id : number = 1; 
  slideIndex: number = 0;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home page');

    this.id = 1; 
    this.slideIndex = 0;

    console.log('slide index: '+ this.slideIndex);

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

    afterChange(e) {
    console.log('afterChange');
  }

  slickModalNext(){
    console.log('nothing!');
    //slickModal.slickGoTo(2);
  }



}
