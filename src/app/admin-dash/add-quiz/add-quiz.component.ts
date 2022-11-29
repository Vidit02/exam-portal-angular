import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { QuestionFuncService } from 'src/app/services/question-func.service';
import { QuizFuncService } from 'src/app/services/quiz-func.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  sections: Number[] = []

  public quiz = {
    "title": "",
    "description": "",
    "sectiontitle" : [""],
    "sectionnum" : [0]
  }

  allcategories: String[] = []
  category: string[] = []
  numofque: number[] = []
  public respCategory = "";
  constructor( private quizService : QuizService , private categoryService: QuizFuncService, private toastr: ToastrService, private questionService: QuestionFuncService, private spin: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
  }

  addSection() {
    this.sections.push(this.sections.length)
    // console.log(thi s.sections.length);
    this.category.push("")
    // console.log(this.category);
    // console.log(this.category[0]);
    this.numofque.push()
    // console.log(this.numofque);
    // if(this.category.length > 1){
    //   let word = this.category[this.category.length - 2]
    //   for (const key in this.allcategories) {
    //     if(word === this.allcategories[key]){
    //       this.allcategories.splice(parseInt(key),1)
    //     }
    //   }
    // }
    // console.log(this.allcategories , "erjno2e");
    
    // if(this.sections.length > 1){
    //   console.log("length of section : " , this.sections.length - 1);
      
    //   for (const key in this.allcategories) {
        
    //   }
    // }
    // let index = this.allcategories.findIndex()
  }

  deleteSection() {
    this.sections.pop();
    this.category.pop();
    this.numofque.pop();
  }

  getCategory() {
    this.categoryService.getTitlesOfCategory().subscribe((resp)=>{
      for(let i of resp.data){
        this.allcategories.push(i.title)
      }
    })
  }

  submitBtn(){
    this.quiz.sectiontitle = this.category
    this.quiz.sectionnum = this.numofque
    console.log("new section titles : ",this.quiz.sectiontitle);
    if(this.quiz.title == null || this.quiz.title.trim().length == 0){
      this.toastr.error("Please Enter the quiz title")
      return
    }
    if(this.quiz.description == null || this.quiz.description.trim().length == 0){
      this.toastr.error("Please Enter the quiz description")
      return
    }
    if(this.quiz.sectiontitle.length == 0){
      this.toastr.error("Please Enter 1 section")
      return
    }
    if(this.quiz.sectionnum.length == 0){
      this.toastr.error("Please Enter 1 ")
    }
    this.spin.show().then(()=>{
      this.quizService.addQuiz(this.quiz).subscribe((resp)=>{
        this.spin.hide()
        if(resp.status == 200){
          Swal.fire("Success","Quiz Added","success")
          this.router.navigateByUrl("/admin/listcategory")
        } else if(resp.status == 401){
          Swal.fire("Error","Enter all Details","error")
        } else if(resp.status == 402){
          Swal.fire("Info","Quiz Already Exist","info")
        } else {
          Swal.fire("Error","Try after sometime","error")
        }
      })
    })
  }
}
