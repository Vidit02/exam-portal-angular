import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { NgxSpinnerService} from "ngx-spinner"
import { QuizFuncService } from 'src/app/services/quiz-func.service';
import Swal from "sweetalert2"
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor(private toastr: ToastrService,private quizService : QuizFuncService ,private spin : NgxSpinnerService,private router : Router) { }

  ngOnInit(): void {
  }

  public categoryDetails = {
    title : "",
    description : "",
    type : ""
  }

  addNewCategory(){
    if(this.categoryDetails.title == "" || this.categoryDetails.title.trim().length == 0){
      this.toastr.error("Please Enter Title")
      return
    }
    if(this.categoryDetails.description == "" || this.categoryDetails.description.trim().length == 0){
      this.toastr.error("Please Enter Description")
      return
    }
    if(this.categoryDetails.type == "" || this.categoryDetails.type.trim().length == 0){
      this.toastr.error("Select Any One Type")
      return
    }
    this.spin.show().then(()=>{
      this.quizService.addCategory(this.categoryDetails).subscribe((resp)=>{
        this.spin.hide()
        if(resp.status == 200){
          Swal.fire("Success","Category Added","success")
        } else if(resp.status == 401){
          Swal.fire("Error","Enter All details","error")
        } else if(resp.status == 402){
          Swal.fire("Info","Category Already Exist","warning")
        } else {
          Swal.fire("Error","Try after sometime","error")
        }
      })
    })
  }
}
