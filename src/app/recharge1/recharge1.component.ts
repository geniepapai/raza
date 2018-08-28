import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge1',
  templateUrl: './recharge1.component.html',
  styleUrls: ['./recharge1.component.css']
})
export class Recharge1Component implements OnInit {

  mode = new FormControl('over');
  id : any;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Select recharge amount');
  }

  selectAmount(id: any) {

    this.id = id;
  }

}
