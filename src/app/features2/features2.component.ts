import { Component, OnInit , HostListener , Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-features2',
  templateUrl: './features2.component.html',
  styleUrls: ['./features2.component.css']
})
export class Features2Component implements OnInit {

  mode = new FormControl('over'); 
  cities = [
    {value: 'kolkata', viewValue: 'Kolkata'},
    {value: 'chennai', viewValue: 'Chennai'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Mumbai', viewValue: 'Mumbai'}
  ];
  headerValue : number = 1;
  id : number = 1; 
  slideIndex: number = 0;

  fillerNav = [ 'INTERNATIONAL CALLING' , 'MOBILE TOP-UP' , 'CALL ME LOCAL' , 'SIGNUP / LOGIN' , 'RECHARGE' , 'LIVE CHAT' , 'CONTACT US' ]; 

  public headerCTile: NgxCarousel;
  public contentCTile: NgxCarousel;

  constructor(public dialog: MatDialog,private router: Router, private titleService: Title) { 

  }

  ngOnInit() {
    this.titleService.setTitle('Features Page');

    this.id = 1; 
    this.slideIndex = 0;

    

    this.headerCTile = {
      grid: {xs: 3, sm: 5, md: 6, lg: 7, all: 0},
      slide: 1,
      speed: 400,
      loop: false,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }

    this.contentCTile = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      loop: false,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  setItUpNow() {
    this.dialog.open(SetItUp);
  }

  howItWorksPopup() {
    this.dialog.open(HowWorks);
  }

  faqPopup() {
    this.dialog.open(FaqPage);
  }

  

  addClass(id: any) {
    this.id = id;
    this.slideIndex = this.id - 1;
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

  public carouselTileLoad(evt: any) {

  }

  onmoveFn(data: NgxCarouselStore) {
    
  }

  afterCarouselViewedFn(data: NgxCarouselStore) {
    
  }

  moveHeaderToLeft() {
    if(this.id > 1) {
      this.id--;
    }
    this.slideIndex = this.id - 1;
    console.log(this.slideIndex);
  }

  moveHeaderToRight() {
    if(this.id < 7) {
      this.id++;
    }
    this.slideIndex = this.id - 1;

    console.log(this.slideIndex);
  }

  moveHeaderToLeft2() {
    if(this.id > 1) {
      this.id--;
    }
    this.slideIndex = this.id - 1;
    console.log(this.slideIndex);
  }

  moveHeaderToRight2() {
    if(this.id < 7) {
      this.id++;
    }
    this.slideIndex = this.id - 2;

    console.log(this.slideIndex);
  }
}

@Component({
  selector: 'how-works',
  templateUrl: 'how-works.html',
})
export class HowWorks {
  constructor(
    public dialogRef: MatDialogRef<HowWorks>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'set-it-up',
  templateUrl: 'set-it-up.html',
})
export class SetItUp {
  constructor(
    public dialogRef: MatDialogRef<SetItUp>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}



@Component({
  selector: 'faq-page',
  templateUrl: 'faq-page.html',
})
export class FaqPage {
  constructor(
    public dialogRef: MatDialogRef<FaqPage>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}


