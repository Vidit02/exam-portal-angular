import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  sections : Number[]  = [] 
  constructor() { }

  ngOnInit(): void {
  }

  addSection(){
    this.sections.push(this.sections.length)
  }

  deleteSection(){
    this.sections.pop();
  }
}
