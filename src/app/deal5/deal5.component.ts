import { Component, OnInit , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deal5',
  templateUrl: './deal5.component.html',
  styleUrls: ['./deal5.component.css']
})
export class Deal5Component implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;
  fillerNav = [ 'INTERNATIONAL CALLING' , 'MOBILE TOP-UP' , 'CALL ME LOCAL' , 'SIGNUP / LOGIN' , 'RECHARGE' , 'LIVE CHAT' , 'CONTACT US' ]; 

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Deal 5');
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
