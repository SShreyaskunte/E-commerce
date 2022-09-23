import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdcutModel } from '../prodcut-model';
import { ProductapiService } from '../productapi.service';

@Component({
  selector: 'app-cred',
  templateUrl: './cred.component.html',
  styleUrls: ['./cred.component.css']
})
export class CredComponent implements OnInit {

  formValue!: FormGroup;
  productModelObj : ProdcutModel = new ProdcutModel();
  productData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  submitted = false;


  constructor(private formbuilder: FormBuilder, private api:ProductapiService) { }
  get f() { return this.formValue.controls; }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      pname:['',[Validators.required]],
      pdescription:['',[Validators.required]],
      price:['',[Validators.required, Validators.pattern('[0-9]')]],
      img:['',[Validators.required]]
    })
    this.getProducts();
  }
  clickAddProduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postProductDetails(){
    this.submitted = true;
    if (this.formValue.invalid) {
      return;
    }
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdescription = this.formValue.value.pdescription;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.img = this.formValue.value.img;

    this.api.postProducts(this.productModelObj).subscribe(res=>{
      console.log(res);
      alert("New product added successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }

  getProducts(){
    this.api.getProductDetails().subscribe(res=>{
      this.productData = res;
    }, err=>{
      
    })
  }

  deleteProducts(product: any){
    this.api.deleteProducts(product.id).subscribe(res=>{
      alert("The Product deleted!")
      this.getProducts();
    }), 
    ({

    })
  }

  onEdit(product: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelObj.id = product.id;
    this.formValue.controls['pname'].setValue(product.pname);
    this.formValue.controls['pdescription'].setValue(product.pdescription);
    this.formValue.controls['price'].setValue(product.price);
    this.formValue.controls['img'].setValue(product.img);
  }

  updateProductDetails(){
    if (this.formValue.invalid) {
      return;
    }
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdescription = this.formValue.value.pdescription;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.img = this.formValue.value.img;
    this.api.updateProducts(this.productModelObj, this.productModelObj.id).subscribe(res=>{
      alert("The product updated!")

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    })
  }

}
