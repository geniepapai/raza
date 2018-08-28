import { Component, OnInit , Inject , HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  mode = new FormControl('over');
  headerValue : number = 1;

  fillerNav = [ 'INTERNATIONAL CALLING' , 'MOBILE TOP-UP' , 'CALL ME LOCAL' , 'SIGNUP / LOGIN' , 'RECHARGE' , 'LIVE CHAT' , 'CONTACT US' ];

  constructor(public dialog: MatDialog,private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Contact Us');
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

  chatWithUs(){
    const dialogRef1 = this.dialog.open(CallUsDialog);
    dialogRef1.afterClosed().subscribe(result => {
      console.log('test');
    });
  }

  messageUs(){
    const dialogRef2 = this.dialog.open(MessageUsDialog);
    dialogRef2.afterClosed().subscribe(result => {
      console.log('test');
    }); 
  }

}

@Component({
  selector: 'call-us',
  templateUrl: 'call-us.html'
})
export class CallUsDialog {
  constructor(
    public dialogRef: MatDialogRef<CallUsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'message-us',
  templateUrl: 'message-us.html'
})
export class MessageUsDialog {
  constructor(
    public dialogRef: MatDialogRef<MessageUsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
} 
