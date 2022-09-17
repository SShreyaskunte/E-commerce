import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BindingComponent } from './binding/binding.component';
import { ProductsComponent } from './products/products.component';
import { LaptopsComponent } from './laptops/laptops.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path: 'laptops', component:LaptopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
