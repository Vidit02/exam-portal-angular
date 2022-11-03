import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient:HttpClient) { }

  loginUser(user:any):Observable<any>{
    return this.httpClient.post(environment.url+"/auth/login",user)
  }
}
