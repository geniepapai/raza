import { Component, OnInit , Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-vn-myaccount',
  templateUrl: './vn-myaccount.component.html',
  styleUrls: ['./vn-myaccount.component.css']
})
export class VnMyaccountComponent implements OnInit {

  mode = new FormControl('over');

  currentTab = "virtual";
  foods: any;

  constructor(public dialog: MatDialog, private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('VN - my account');
  }

  virtualNumberPopup(){
    this.dialog.open(VirtualNumber2Dialog);
  }

}

@Component({
  selector: 'virtual-number',
  templateUrl: 'virtual-number.html',
})
export class VirtualNumber2Dialog {
  constructor(
    public dialogRef: MatDialogRef<VirtualNumber2Dialog> , public dialog: MatDialog , 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
  
}
