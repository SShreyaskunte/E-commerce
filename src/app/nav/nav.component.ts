import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:UserService,private cartSvc:CartService, private adminService:AdminService) { }
  auth:boolean=false;
  admin:boolean=false;
  cartCount: number=0;


  logo = "assets/logo.jpg"

  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );

    this.adminService.adminSubject.subscribe(
      data =>
      {
        console.log('admin inside nav component: ' + data);
        this.admin = data;
      }
    );

    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
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
