import { Component, OnInit , Inject , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobiletopup',
  templateUrl: './mobiletopup.component.html',
  styleUrls: ['./mobiletopup.component.css']
})
export class MobiletopupComponent implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;

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
    this.titleService.setTitle('Mobile topup');
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
