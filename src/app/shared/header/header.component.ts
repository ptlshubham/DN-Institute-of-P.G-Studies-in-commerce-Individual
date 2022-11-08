import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  isSticky: boolean = false;
  public collapsed = true;
  readMore=false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor() { }

  ngOnInit(): void {
  }
  moreOpen(){
    this.readMore=true;
  }
  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2 = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.displayStyle1 = "none";
    this.displayStyle2 = "none";
  }
  openPopup1() {
    this.displayStyle1 = "block";
  }
  openPopup2() {
    this.displayStyle2 = "block";
  }
}
