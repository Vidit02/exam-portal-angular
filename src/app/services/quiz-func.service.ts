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

  //List all categories
  listCategory():Observable<any>{
    return this.httpClient.get(environment.adminurl + "/listcategory")
  }
  
  //get category
  getCategory(category:any):Observable<any>{
    let obj = {
      "title" : category
    }
    return this.httpClient.post(environment.adminurl + "/getcategory",obj)
  }

  //update category
  updateCategory(category:any):Observable<any>{
    return this.httpClient.post(environment.adminurl+"/updatecategory",category)
  }
}
