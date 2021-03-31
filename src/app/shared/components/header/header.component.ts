import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarforMe:  EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  toggleSideBar(){
    this.toggleSideBarforMe.emit();
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent);    
  }
  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent);
  }

}
