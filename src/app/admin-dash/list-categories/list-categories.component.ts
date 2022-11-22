import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { QuizFuncService } from 'src/app/services/quiz-func.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  constructor(private toastr: ToastrService, private quizService: QuizFuncService, private spin: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.spin.show().then(() => {
      this.quizService.listCategory().subscribe((resp) => {
        this.spin.hide()
        if (resp.status == 200) {
          this.allCategories = resp.data
          console.log(this.allCategories);
        } else {
          Swal.fire("Error", "Something is wrong", "error")
        }
      })
    })
  }

  allCategories: Array<any> = []

  category : any = {}
  updateCategory(title: any) {
    sessionStorage.setItem("title", title)
    this.router.navigateByUrl("/admin/editcategory")
  }

  deleteCategory(title: any) {
    console.log("title",title);
    
    Swal.fire({
      title: `Delete ${title} `,
      text: "Sure want to delete?",
      icon: "warning",
      confirmButtonText: "Delete Category",
      confirmButtonColor: "#FF0000",
      showConfirmButton: true,
      showCancelButton: true
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        let category = {
          "title" : title
        }
        this.spin.show().then(() => {
          this.quizService.deleteCategory(category).subscribe((resp) => {
            this.spin.hide()
            if (resp.status == 200) {
              this.toastr.info(`${title} is deleted...`)
              this.router.navigateByUrl("/admin/listcategory")
              this.ngOnInit()
            } else {
              this.toastr.error(`Something is wrong`)
              this.router.navigateByUrl("/admin/listcategory")
            }
          })
        })
      }
    })
  }

  showCategory(title : any,id : any) {
    sessionStorage.setItem("title",title)
    sessionStorage.setItem("categoryid",id)
    this.router.navigateByUrl("/admin/showcategory")
  }

}
