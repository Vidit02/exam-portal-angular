import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizFuncService {

  constructor(private httpClient : HttpClient) { }

  //API to add a quiz category
  addCategory(category:any):Observable<any>{
    return this.httpClient.post(environment.adminurl + "/addcategory",category)
  }
}
