import { Component, OnInit } from '@angular/core';
import * as mobiles from  "../mobile/db.json";

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allmobiles:any=(mobiles as any).default;

}
