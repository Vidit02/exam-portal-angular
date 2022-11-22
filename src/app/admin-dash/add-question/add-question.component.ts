import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionFuncService } from 'src/app/services/question-func.service'
import Swal from "sweetalert2"
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  constructor(private toastr: ToastrService,private questionService : QuestionFuncService ,private spin : NgxSpinnerService,private router : Router) { }

  title : any = String
  categoryId : any = String
  ngOnInit(): void {
    this.title = sessionStorage.getItem("title")
    this.categoryId = sessionStorage.getItem("categoryid")
  }

  public questionDetails = {
    title : sessionStorage.getItem("title"),
    categoryId : sessionStorage.getItem("categoryid"),
    question : "",
    optionA : "",
    optionB : "",
    optionC : "",
    optionD : "",
    difficulty : "",
    correctAns : ""
  }


  addQuestion(){
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
      this.questionService.addQuestion(this.questionDetails).subscribe((resp)=>{
        this.spin.hide()
        if(resp.status == 200){
          Swal.fire("Success","Question Added","success")
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
