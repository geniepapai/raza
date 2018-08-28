import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge2',
  templateUrl: './recharge2.component.html',
  styleUrls: ['./recharge2.component.css']
})

 

export class Recharge2Component implements OnInit {

  mode = new FormControl('over');
  selectedYear: any;
  cardNumber: number = 1; 

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Rechagre 2');
  }
  

}



