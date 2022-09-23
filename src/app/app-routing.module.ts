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
import { LoginComponent } from './login/login.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { CredComponent } from './cred/cred.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path: 'laptops', component:LaptopsComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'mobile', component:MobileComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cartitem', component:CartitemsComponent},
  {path: 'headphones', component:HeadphonesComponent},
  {path: 'allproducts', component:CredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
