import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, BehaviorSubject  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
if (localStorage.getItem('userToken')!= null){
  this.saveData();
}

   }
userData:any = new BehaviorSubject(0);

saveData(){
 let encodeToken= JSON.stringify(localStorage.getItem('userToken'));
 console.log(encodeToken);

 let decodeToken:any= jwtDecode(encodeToken);
 console.log((decodeToken));

 this.userData.next(decodeToken)
 console.log(this.userData);

}





    singUp(userData:object):Observable<any>
{
  console.log(userData);

return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData).pipe(
  tap((res)=> {
    console.log(res);

  }),
  catchError((err)=> {
    console.log(err)
    throw new Error(err);
  })
)

}
signIn(userData:object):Observable<any>
{
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
}
logOut(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._Router.navigate(['./login'])

}
}
