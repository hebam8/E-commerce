import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _CartService:CartService) { }
cartDetails:any=null
cartID:any=''

removeItem(productId:string){
  this._CartService.removeCartItem(productId).subscribe({
    next:(response)=>{
 this.cartDetails=response.data
    },
    error:(err)=>console.log(err)

  })
}
updateItem(productId:string,count:number){
  this._CartService.updateCartItem(productId,count).subscribe({
    next:(repo)=> {(this.cartDetails=repo.data)
      console.log(repo.data)} ,
error:(err)=>console.log(err)
  })
}

  ngOnInit(): void {
  this._CartService.getLoggedUserCart().subscribe({
    next:(repo)=> {(this.cartDetails=repo.data)
                this.cartID=repo.data._id
                localStorage.setItem('cartID',this.cartID)
                  console.log(repo.data._id)} ,
      error:(err)=>console.log(err)

  })
  }

}
