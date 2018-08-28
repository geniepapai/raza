import { Component, OnInit , HostListener} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobileterms',
  templateUrl: './mobileterms.component.html',
  styleUrls: ['./mobileterms.component.css']
})
export class MobiletermsComponent implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Mobile terms'); 
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
