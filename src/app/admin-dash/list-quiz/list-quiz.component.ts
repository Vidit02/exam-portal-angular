import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {

  constructor(private toastr: ToastrService, private quizService : QuizService, private spin: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.spin.show().then(() => {
      this.quizService.listQuiz().subscribe((resp)=>{
        this.spin.hide()
        if(resp.status == 200){
          this.allquizzes = resp.data
        } else {
          Swal.fire("Error","Something is wrong","error")
        }
      })
    })
  }

  allquizzes : Array<any> = []
  titles : Array<any> = []
  numbers : Array<any> = []
  status : Boolean = false
  activateQuiz(id : any , title : any){
    this.spin.show().then(()=>{
      let quiz = {
        "id" : id
      }
      this.quizService.findQuiz(quiz).subscribe((resp)=>{
        this.spin.hide()
        if(resp.status == 200){
          if(resp.data.status == false){
            let quizdetails = {
              "id" : id,
              "status" : true
            }
            this.spin.show().then(()=>{
              this.quizService.updateQuizStatus(quizdetails).subscribe((resp)=>{
                this.spin.hide()
                if(resp.status == 200){
                  this.toastr.success(`${title} is activated`)
                  this.ngOnInit()
                } else {
                  this.toastr.error("Something is wrong")
                  this.router.navigateByUrl("/admin/listquiz")
                }
              })
            })
          } else {
            let quizdetails = {
              "id" : id,
              "status" : false
            }
            this.spin.show().then(()=>{
              this.quizService.updateQuizStatus(quizdetails).subscribe((resp)=>{
                this.spin.hide()
                if(resp.status == 200){
                  this.toastr.success(`${title} is inactivated`)
                  this.ngOnInit()
                } else {
                  this.toastr.error("Something is wrong")
                  this.router.navigateByUrl("/admin/listquiz")
                }
              })
            })
          }
        } else {
          this.toastr.error("Something is wrong" , "Error")
          this.ngOnInit()
        }
      })
    })
  }

  deleteQuiz(id : any , title : any){
    console.log("This is id" , id);
    
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
        let quiz = {
          "id" : id
        }
        this.spin.show().then(() => {
          this.quizService.deleteQuiz(quiz).subscribe((resp) => {
            this.spin.hide()
            if (resp.status == 200) {
              this.toastr.info(`${title} is deleted...`)
              this.router.navigateByUrl("/admin/listquiz")
              this.ngOnInit()
            } else {
              this.toastr.error(`Something is wrong`)
              this.router.navigateByUrl("/admin/listquiz")
            }
          })
        })
      }
    })
  }

  updateQuiz(id:any,title:any){
    sessionStorage.setItem("quiztitle",title)
    sessionStorage.setItem("quizid",id)
    this.router.navigateByUrl("/admin/editquiz")
  }
}
