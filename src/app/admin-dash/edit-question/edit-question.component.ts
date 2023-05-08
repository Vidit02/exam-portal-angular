import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionFuncService } from 'src/app/services/question-func.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  constructor(private toastr: ToastrService, private quizService: QuizService, private questionService: QuestionFuncService, private spin: NgxSpinnerService, private router: Router) { }

  public questionDetails = {
    "title": sessionStorage.getItem("title"),
    "categoryId": sessionStorage.getItem("categoryid"),
    "id" : "",
    "question": "",
    "optionA": "",
    "optionB": "",
    "optionC": "",
    "optionD": "",
    "difficulty": "",
    "correctAns": ""
  }

  title: any = String
  questionid: any = String
  categoryId: any = String
  ngOnInit(): void {
    this.title = sessionStorage.getItem("title")
    this.categoryId = sessionStorage.getItem("categoryid")
    this.questionid = sessionStorage.getItem("questionid")
    this.spin.show().then(() => {
      this.questionService.findQuestion(this.questionid).subscribe((res)=>{
        this.spin.hide()
        if(res.status == 200){
          this.questionDetails.id = res.data._id
          this.questionDetails.question = res.data.question
          this.questionDetails.optionA = res.data.optionA
          this.questionDetails.optionB = res.data.optionB
          this.questionDetails.optionC = res.data.optionC
          this.questionDetails.optionD = res.data.optionD
          this.questionDetails.correctAns = res.data.correctAns
          this.questionDetails.difficulty = res.data.difficulty
          // if(res.data.difficulty == 1){
          //   this.questionDetails.difficulty = "Easy"
          // } else if (res.data.difficulty == 2){
          //   this.questionDetails.difficulty = "Hard"
          // } else if (res.data.difficulty == 2){
          //   this.questionDetails.difficulty = "Very Hard"
          // } else {
          //   this.questionDetails.difficulty = "Hard"
          // }
        } else {
          console.log(res);
          Swal.fire("Error","Data not found","error")
          sessionStorage.removeItem("questionid")
          this.router.navigateByUrl("/admin/showcategory")
        }
      })
    })
  }

  updateBtn(){
    if(this.questionDetails.question == "" || this.questionDetails.question.trim().length == 0){
      this.toastr.error("Please Enter Question")
      return
    }
    if(this.questionDetails.optionA == "" || this.questionDetails.optionA.trim().length == 0){
      this.toastr.error("Please Enter Option A")
      return
    }
    if(this.questionDetails.optionB == "" || this.questionDetails.optionB.trim().length == 0){
      this.toastr.error("Please Enter Option B")
      return
    } else {
      if(this.questionDetails.optionB == this.questionDetails.optionA){
        this.toastr.error("Please Enter different option")
        return
      }
    }
    if(this.questionDetails.optionC == "" || this.questionDetails.optionC.trim().length == 0){
      this.toastr.error("Please Enter Option C")
      return
    } else {
      if(this.questionDetails.optionC == this.questionDetails.optionA || this.questionDetails.optionC == this.questionDetails.optionB){
        this.toastr.error("Please Enter different option")
        return
      }
    }
    if(this.questionDetails.optionD == "" || this.questionDetails.optionD.trim().length == 0){
      this.toastr.error("Please Enter Option D")
      return
    } else {
      if(this.questionDetails.optionD == this.questionDetails.optionA || this.questionDetails.optionD == this.questionDetails.optionB || this.questionDetails.optionD == this.questionDetails.optionC ){
        this.toastr.error("Please Enter different option")
        return
      }
    }
    if(this.questionDetails.correctAns == "" || this.questionDetails.correctAns == null){
      this.toastr.error("Please Choose a correct ans")
      return
    }
    if(this.questionDetails.difficulty == "" || this.questionDetails.difficulty == null){
      this.toastr.error("Please Choose a difficulty level")
      return
    }
    this.spin.show().then(()=>{
      this.questionService.updateQuestion(this.questionDetails).subscribe((resp)=>{
        this.spin.hide()
        if(resp.status == 200){
          Swal.fire("Success","Question Updated","success")
          this.router.navigateByUrl("/admin/showcategory")
        } else if(resp.status == 401){
          Swal.fire("Error","Enter all Details","error")
        } else if(resp.status == 402){
          Swal.fire("Info","Question Already Exist","warning")
        } else {
          Swal.fire("Error","Try after sometime","error")
        }
      })
    })
  }
}
