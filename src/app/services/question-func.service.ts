import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestionFuncService {

  constructor(private httpClient : HttpClient) {  }

  //Method for adding question
  addQuestion(question:any): Observable<any>{
    return this.httpClient.post(environment.adminurl+"/addquestion",question)
  }

  //Method for listing all questions
  showQuestions(titleid:any): Observable<any>{
    const titlobj = {
      "categoryId" : titleid
    }
    return this.httpClient.post(environment.adminurl+"/showquestions",titlobj)
  }

  //Method for finding a particular question
  findQuestion(questionid:any) : Observable<any>{
    const question = {
      "questionId" : questionid
    }
    return this.httpClient.post(environment.adminurl+"/getquestion",question)
  }

  //Method for updating a particular question
  updateQuestion(question : any) : Observable<any>{
    return this.httpClient.post(environment.adminurl+"/updatequestion",question)
  }
}
