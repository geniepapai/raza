import { Component, OnInit , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinexisting',
  templateUrl: './signinexisting.component.html',
  styleUrls: ['./signinexisting.component.css']
})
export class SigninexistingComponent implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;

  countries = [
    {value: 'ind', viewValue: 'India'},
    {value: 'usa', viewValue: 'USA'}
  ];

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Existing customer signin');
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
