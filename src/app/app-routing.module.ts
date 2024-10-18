import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesdetailsComponent } from './categoriesdetails/categoriesdetails.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailsComponent } from './productsdetails/productsdetails.component';
import {  BrandComponent } from './brand/brand.component';
import { BranddetailsComponent } from './branddetails/branddetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"", redirectTo :"home",pathMatch:"full"},
  {path:"home", canActivate:[AuthGuard],  component:HomeComponent},

  {path:"categories",  canActivate:[AuthGuard], component:CategoriesComponent},
  {path:"categoriesdetails/:id",  canActivate:[AuthGuard], component:CategoriesdetailsComponent},

  {path:"cart",  canActivate:[AuthGuard], component:CartComponent},
  {path:"products",  canActivate:[AuthGuard], component:ProductsComponent},

  {path:"checkout",  canActivate:[AuthGuard], component:CheckoutComponent},
  {path:"productdetails/:id",  canActivate:[AuthGuard], component:ProductdetailsComponent},
  {path:"brands",  canActivate:[AuthGuard], component:BrandComponent},
  {path:"brandsdetailes/:id",  canActivate:[AuthGuard], component:BranddetailsComponent},
  {path:"login",   component:LoginComponent},
  {path:"register",  component:RegisterComponent},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
