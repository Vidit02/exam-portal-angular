import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuizFuncService } from 'src/app/services/quiz-func.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private toastr: ToastrService, private quizService: QuizFuncService, private spin: NgxSpinnerService, private router: Router) { }

  category : any = {}
  ngOnInit(): void {
    let title = sessionStorage.getItem("title")
    if(title == null) {
      Swal.fire("Error","Something is wrong","error")
      this.router.navigateByUrl("/admin/listcategory")
    } else{
      this.spin.show().then(()=>{
        this.quizService.getCategory(title).subscribe((resp)=>{
          if(resp.status == 200){
            this.spin.hide()
            console.log(resp);
            this.category = resp.data
          } else {
            this.spin.hide()
            this.toastr.error("Something is wrong")
            this.router.navigateByUrl("/admin/listcategory")
          }
        })   
      })
    }
  }

  addQuestion(){
    sessionStorage.setItem("categoryid",this.category._id)
    this.router.navigateByUrl("/admin/addquestion")
  }
  

}
