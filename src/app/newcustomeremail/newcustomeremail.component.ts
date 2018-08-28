import { Component, OnInit , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcustomeremail',
  templateUrl: './newcustomeremail.component.html',
  styleUrls: ['./newcustomeremail.component.css']
})
export class NewcustomeremailComponent implements OnInit {

  mode = new FormControl('over');

  headerValue : number = 1;
  hide = true;

  cities = [
    {value: 'kolkata', viewValue: 'Kolkata'},
    {value: 'chennai', viewValue: 'Chennai'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Mumbai', viewValue: 'Mumbai'}
  ];

  countries = [
    {value: 'india', viewValue: 'India'},
    {value: 'canada', viewValue: 'Canada'}
  ];

  states = [
    {value: 'westbengal', viewValue: 'West Bengal'}
  ];

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('New customer signin');
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
