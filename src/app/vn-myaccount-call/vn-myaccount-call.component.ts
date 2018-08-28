import { Component, OnInit , Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vn-myaccount-call',
  templateUrl: './vn-myaccount-call.component.html',
  styleUrls: ['./vn-myaccount-call.component.css']
})
export class VnMyaccountCallComponent implements OnInit {

  mode = new FormControl('over'); 
  currentTab = "virtual";
  foods: any;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('VN - My account call');
  }

}
