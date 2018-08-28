import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  mode = new FormControl('over');
  sidenav: any;

  constructor() { }

  ngOnInit() {
  }

}
