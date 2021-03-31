import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defualt',
  templateUrl: './defualt.component.html',
  styleUrls: ['./defualt.component.scss']
})
export class DefualtComponent implements OnInit {

  sideBarOpen=true;
 // contentMargin = 350;
  constructor() { }

  ngOnInit(){ }

  sideBarToggler()
  {
    this.sideBarOpen = !this.sideBarOpen;
debugger
    // if(!this.sideBarOpen) {
    //   this.contentMargin = 70;
    // } else {
    //   this.contentMargin = 240;
    // }
  }

}
