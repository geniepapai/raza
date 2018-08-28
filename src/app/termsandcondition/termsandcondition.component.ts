import { Component, OnInit , HostListener} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.component.html',
  styleUrls: ['./termsandcondition.component.css']
})
export class TermsandconditionComponent implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Terms and Condition'); 
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
