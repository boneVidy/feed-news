import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-back-component',
  templateUrl: './back-component.component.html',
  styleUrls: ['./back-component.component.scss']
})
export class BackComponentComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }
  goBack (): void {
    this.location.back();
  }
}
