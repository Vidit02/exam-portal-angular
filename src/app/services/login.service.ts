import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from "sweetalert2"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient:HttpClient) { }

  //Method for login
  loginUser(user:any):Observable<any>{
    return this.httpClient.post(environment.url+"/auth/login",user)
  }

  //Method to get the token from session storage
  // getToken(){
  //   console.log(sessionStorage.setItem("new","Vidit"));
  //   console.log(sessionStorage.getItem("new"));
    
  //   return sessionStorage.getItem("bearer")
  // }

  //Get Current user
  // getCurrentUser(){
  //  return this.httpClient.get(environment.userurl+"/userdetails");
  // }

  logOutUser(){
    sessionStorage.clear()
    Swal.fire("Success","Logged Out Successfully","success")
    return true
  }
}
