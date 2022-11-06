import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient : HttpClient) { }


  getToken(){
    return sessionStorage.getItem("bearer")
  }

  getCurrentAdmin():Observable<any>{
    return this.httpClient.get(environment.adminurl+"/admindetails")
   }
}
