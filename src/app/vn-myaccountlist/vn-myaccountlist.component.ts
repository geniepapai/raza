import { Component, OnInit , Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vn-myaccountlist',
  templateUrl: './vn-myaccountlist.component.html',
  styleUrls: ['./vn-myaccountlist.component.css']
})
export class VnMyaccountlistComponent implements OnInit {

  mode = new FormControl('over'); 
  currentTab = "virtual";
  foods: any;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('VN - my account list');
  }

}
