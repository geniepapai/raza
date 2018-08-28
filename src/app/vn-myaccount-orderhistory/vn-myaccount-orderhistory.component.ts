import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vn-myaccount-orderhistory',
  templateUrl: './vn-myaccount-orderhistory.component.html',
  styleUrls: ['./vn-myaccount-orderhistory.component.css']
})
export class VnMyaccountOrderhistoryComponent implements OnInit {

  mode = new FormControl('over'); 
  currentTab = "virtual";
  foods: any;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('VN - My account Order history');
  }

}
