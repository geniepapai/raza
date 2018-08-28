import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepageuflow-sign',
  templateUrl: './homepageuflow-sign.component.html',
  styleUrls: ['./homepageuflow-sign.component.css']
})
export class HomepageuflowSignComponent implements OnInit {

  mode = new FormControl('over');
  fillerNav = [ 'INTERNATIONAL CALLING' , 'MOBILE TOP-UP' , 'CALL ME LOCAL' , 'SIGNUP / LOGIN' , 'RECHARGE' , 'LIVE CHAT' , 'CONTACT US' ]; 

  months = [
    {value: 'jan', viewValue: 'January'},
    {value: 'feb', viewValue: 'February'},
    {value: 'march', viewValue: 'March'},
    {value: 'april', viewValue: 'April'}
  ];

  years = [
    {value: '1990', viewValue: '1990'},
    {value: '1991', viewValue: '1991'},
    {value: '1992', viewValue: '1992'},
    {value: '1992', viewValue: '1993'}
  ];

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Update Card Details');
  }

}
