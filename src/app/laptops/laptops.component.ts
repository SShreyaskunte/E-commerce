import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
import Swal from 'sweetalert2';
import * as AOS from 'aos';
import * as laptops from '../laptops/db.json'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private cartsvc:CartService) { }

  laptopapi = environment.laptopapi;

  cart:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }
  quantity:number=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdescription=product.pdescription;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.pid=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  }
  //Input Class Decorator
  @Input()product:any

  ngOnInit(): void {
    AOS.init()
  }

  allLaptops:any=(laptops as any).default;


}
