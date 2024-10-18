import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


isLogin:boolean=false;
cartNumber:number=0;
  constructor(private _AuthService:AuthService, private _cartService:CartService) {
    this._cartService.numberOfCartItem.subscribe({
      next:(value)=>this.cartNumber=value
    })

    this._AuthService.userData.subscribe({
      next:()=>{
        if (this._AuthService.userData.getValue()  != null)
      {
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }


      }
          })






  }

   logOut(){
    this._AuthService.logOut();
   }
  ngOnInit(): void {


}}


