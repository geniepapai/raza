import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vn-myaccount-options',
  templateUrl: './vn-myaccount-options.component.html',
  styleUrls: ['./vn-myaccount-options.component.css']
})
export class VnMyaccountOptionsComponent implements OnInit {

  mode = new FormControl('over'); 
  currentTab = "virtual";
  foods: any;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('VN - My account options');
  }

}
