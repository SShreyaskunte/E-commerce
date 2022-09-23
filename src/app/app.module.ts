import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { ChildComponent } from './laptops/child/child.component';
import { RegisterComponent } from './register/register.component';
import { MobileComponent } from './mobile/mobile.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { CredComponent } from './cred/cred.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BindingComponent,
    ProductsComponent,
    SearchComponent,
    FooterComponent,
    LaptopsComponent,
    ChildComponent,
    RegisterComponent,
    MobileComponent,
    LoginComponent,
    CartitemsComponent,
    HeadphonesComponent,
    CredComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
