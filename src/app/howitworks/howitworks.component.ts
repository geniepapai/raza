import { Component, OnInit , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;
  fillerNav = [ 'INTERNATIONAL CALLING' , 'MOBILE TOP-UP' , 'CALL ME LOCAL' , 'SIGNUP / LOGIN' , 'RECHARGE' , 'LIVE CHAT' , 'CONTACT US' ]; 

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('How it works');
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
