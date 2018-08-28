import { Component, OnInit , Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vn-myaccountsetup',
  templateUrl: './vn-myaccountsetup.component.html',
  styleUrls: ['./vn-myaccountsetup.component.css']
})
export class VnMyaccountsetupComponent implements OnInit {

  mode = new FormControl('over');

  currentTab: any;
  foods: any;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Vitual number set up');
  }

}
