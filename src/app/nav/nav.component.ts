import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  logo = "https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Amazon-logo.jpg"

  ngOnInit(): void {
  }

  productentered: string=' '  //Laptop

  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
    //alert("You Searched for "+product_name)
  }

}
