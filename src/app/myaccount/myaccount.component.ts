import { Component, OnInit , Inject , Renderer2 } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import scrollIntoView from 'scroll-into-view-if-needed';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent  implements OnInit{

  currentTab = "recharge"; 
  mode = new FormControl('over');

  id : any = 1;
  public scroll;
  public sections = 11;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  
  

  constructor(public dialog: MatDialog,private router: Router, private titleService: Title , private renderer: Renderer2) {}

  ngOnInit() {
    this.titleService.setTitle('My Account');
    this.renderer.listen(window, 'scroll', ($event) => {
       this.scroll = (window.scrollY / this.sections);
       console.log(this.scroll);
    }) 
  }

  addCardPopup() {
    this.dialog.open(AddCardDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

  editProfile() {
    this.dialog.open(EditProfileDialog);
  }

  addNumber() {
    this.dialog.open(AddNumberDialog);
  }

  addEnroll(){
    this.dialog.open(AddEnrollDialog);
  }

  addNewTouch(){
    this.dialog.open(AddNewDialog);
  }

  addClass(id: any) {
    this.id = id;
  }

  setUpCallForward(){
    this.dialog.open(SetUpCallForward);
  }

  confirmPopup(){
    this.dialog.open(ConfirmPopupDialog);
  }

  virtualNumberPopup(){
    this.dialog.open(VirtualNumberDialog);
  }

  

  

}

@Component({
  selector: 'virtual-number',
  templateUrl: 'virtual-number.html',
})
export class VirtualNumberDialog {
  constructor(
    public dialogRef: MatDialogRef<VirtualNumberDialog> , public dialog: MatDialog , 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
  
}

@Component({
  selector: 'confirm-popup',
  templateUrl: 'confirm-popup.html',
})
export class ConfirmPopupDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmPopupDialog> , public dialog: MatDialog , 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
  
}

@Component({
  selector: 'billing-add',
  templateUrl: 'billing-add.html',
})
export class BillingAddDialog {
  constructor(
    public dialogRef: MatDialogRef<BillingAddDialog> , public dialog: MatDialog , 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
  
}

@Component({
  selector: 'add-card',
  templateUrl: 'add-card.html',
})
export class AddCardDialog {
  constructor(
    public dialogRef: MatDialogRef<AddCardDialog> , public dialog: MatDialog , 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
  nextBillingAddress(): void {
    this.dialog.open(BillingAddDialog);
    this.dialogRef.close();
  }
}

@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfileDialog {
  constructor(
    public dialogRef: MatDialogRef<EditProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'add-number',
  templateUrl: 'add-number.html',
})
export class AddNumberDialog {
  constructor(
    public dialogRef: MatDialogRef<AddNumberDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'add-enroll',
  templateUrl: 'add-enroll.html',
})
export class AddEnrollDialog {
  constructor(
    public dialogRef: MatDialogRef<AddEnrollDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'add-new2',
  templateUrl: 'add-new2.html',
})
export class AddNewDialog2 {
  constructor(
    public dialogRef: MatDialogRef<AddNewDialog2>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }

  
  
}



@Component({
  selector: 'add-new',
  templateUrl: 'add-new.html',
})
export class AddNewDialog {
  constructor(
    public dialogRef: MatDialogRef<AddNewDialog>, public dialog: MatDialog ,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }

  callToInfo():void {
    this.dialog.open(AddNewDialog2);
    this.dialogRef.close();
  }
  
}

@Component({
  selector: 'set-up-call',
  templateUrl: 'set-up-call.html',
})
export class SetUpCallForward {
  constructor(
    public dialogRef: MatDialogRef<AddNewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeIcon(): void {
    this.dialogRef.close();
  }
}



