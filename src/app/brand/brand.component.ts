import { Component, OnInit } from '@angular/core';

import { BrandsService } from './../brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor(private _BrandsService:BrandsService ) { }
brandsDetails:any=''
  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next:(response)=>{this.brandsDetails=response.data
        console.log(response.data)} ,
      error:(err)=>console.log(err)


    })
  }


}
