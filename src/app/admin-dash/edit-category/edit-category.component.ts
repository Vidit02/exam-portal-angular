import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { NgxSpinnerService} from "ngx-spinner"
import { QuizFuncService } from 'src/app/services/quiz-func.service';
import Swal from "sweetalert2"

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private toastr: ToastrService,private quizService : QuizFuncService ,private spin : NgxSpinnerService,private router : Router) { }
  category : any = {}
  ngOnInit(): void {
    let title = sessionStorage.getItem("title")
    console.log(title);
    if(title == null) {
      Swal.fire("Error","Something is wrong","error")
      this.router.navigateByUrl("/admin/listcategory")
    } else{
      this.spin.show().then(()=>{
        this.quizService.getCategory(title).subscribe((resp)=>{
          console.log(resp , "trhis s wjd");
          this.spin.hide()
          if(resp.status == 200){
            this.category = resp.data
          } else {
            Swal.fire("Error","Something is wrong","error")
          } 
        })
      })
    }
  }

  editCategory() {
    this.spin.show().then(()=>{
      this.quizService.updateCategory(this.category).subscribe((resp)=>{
        this.spin.hide()
        if(resp.status == 200){
          Swal.fire("Success","Category Updated","success")
          this.router.navigateByUrl("/admin/listcategory")
        } else {
          Swal.fire("Error","Something is Wrong","error")
        }
      })
    })
  }

}
