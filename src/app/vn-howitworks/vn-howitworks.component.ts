import { Component, OnInit , Inject , HostListener} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vn-howitworks',
  templateUrl: './vn-howitworks.component.html',
  styleUrls: ['./vn-howitworks.component.css']
})
export class VnHowitworksComponent implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('VN How it works');
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.pageYOffset
      
      if(scrollPosition > 5){
        this.headerValue = 2;

      }else{
        this.headerValue = 1;
      }

    }

}
