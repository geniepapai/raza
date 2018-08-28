import { Component, OnInit , Inject , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-virtualnumber1',
  templateUrl: './virtualnumber1.component.html',
  styleUrls: ['./virtualnumber1.component.css']
})
export class Virtualnumber1Component implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;

  cities = [
    {value: 'kolkata', viewValue: 'Kolkata'},
    {value: 'chennai', viewValue: 'Chennai'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Mumbai', viewValue: 'Mumbai'}
  ];

  countries = [
    {value: 'india', viewValue: 'India'},
    {value: 'canada', viewValue: 'Canada'}
  ];

  states = [
    {value: 'westbengal', viewValue: 'West Bengal'}
  ];

  constructor(public dialog: MatDialog,private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Virtual Number 1');
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

  openVNList() {
    this.dialog.open(OpenVNLists);
  }

}

@Component({
  selector: 'virtual-numberlist',
  templateUrl: 'virtual-numberlist.html',
})

export class OpenVNLists {
  constructor(
    public dialogRef: MatDialogRef<OpenVNLists>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}
