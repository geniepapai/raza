import { Component, OnInit , HostListener} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callafrica',
  templateUrl: './callafrica.component.html',
  styleUrls: ['./callafrica.component.css']
})
export class CallafricaComponent implements OnInit {

  headerValue : number = 1;
  showmore : number = 0;
  mode = new FormControl('over');
  fillerNav = [ 'INTERNATIONAL CALLING' , 'MOBILE TOP-UP' , 'CALL ME LOCAL' , 'SIGNUP / LOGIN' , 'RECHARGE' , 'LIVE CHAT' , 'CONTACT US' ];

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
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

  showMoreCountry(){
    this.showmore = 1;
  }

  hideMoreCountry(){
    this.showmore = 0;
  }

}
