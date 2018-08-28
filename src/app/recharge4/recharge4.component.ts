import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge4',
  templateUrl: './recharge4.component.html',
  styleUrls: ['./recharge4.component.css']
})
export class Recharge4Component implements OnInit {

  mode = new FormControl('over');

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Payment successful');
  }

}
