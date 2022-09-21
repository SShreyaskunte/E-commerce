import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BindingComponent } from './binding/binding.component';
import { ProductsComponent } from './products/products.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path: 'laptops', component:LaptopsComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'mobile', component:MobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
