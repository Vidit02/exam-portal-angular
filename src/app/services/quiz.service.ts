import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient : HttpClient) { }

  //API to add quiz
  addQuiz(quiz:any) : Observable<any>{
    return this.httpClient.post(environment.adminurl+"/addquiz",quiz)
  }

  //list of all quizzes
  listQuiz() : Observable<any>{
    return this.httpClient.get(environment.adminurl+"/listquiz")
  }

  //Delete Quiz api
  deleteQuiz(quiz : any) : Observable<any>{
    return this.httpClient.post(environment.adminurl+"/deletequiz",quiz);
  }
  
  //find quiz api
  findQuiz(quiz : any) : Observable<any>{
    return this.httpClient.post(environment.adminurl+"/getquiz",quiz)
  }

  //update quiz api
  updateQuiz(quiz : any) : Observable<any>{
    return this.httpClient.post(environment.adminurl + "/updatequiz",quiz)
  }

  //update quiz status api
  updateQuizStatus(quiz : any) : Observable<any>{
    return this.httpClient.post(environment.adminurl + "/updatequizstatus",quiz)
  }
}
