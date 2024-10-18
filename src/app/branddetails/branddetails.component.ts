import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from './../brands.service';

@Component({
  selector: 'app-branddetails',
  templateUrl: './branddetails.component.html',
  styleUrls: ['./branddetails.component.scss']
})
export class BranddetailsComponent implements OnInit {
  brandDetails:any='';
  brandID:any=''
  constructor(private _BrandsService:BrandsService, private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param)=>{
      this.brandID=param.get('id')
    })
    this._BrandsService.getSpecificBrands(this.brandID).subscribe({
      next:(response)=>{this.brandDetails=response.data
        console.log(response.data)},
      error:(err)=>  console.log(err)

   })
  }

}
