import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr'
import { SignupService } from 'src/app/services/signup.service';
import { NgxSpinnerService} from "ngx-spinner"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastr: ToastrService , private signupService: SignupService, private spin : NgxSpinnerService)  { }

  ngOnInit(): void {
  }
  public userDetails = {
    firstName : "",
    lastName : "",
    emailId : "",
    password: "",
    mobNum: ""
  }

  //Regex for confirming email and password 
  regexForEmail: any = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
  regexForPass: any = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
  regexForMob: any = /^\d{10}$/

  //function for signup
  signupUser(){
    console.log(this.userDetails);
    if(this.userDetails.firstName == "" || this.userDetails.firstName.trim().length == 0){
      this.toastr.error("Please Enter First Name")
      console.log("Firstname error");
      
      return
    } 
    if(this.userDetails.lastName == "" || this.userDetails.lastName.trim().length == 0){
      this.toastr.error("Please Enter Last Name")
      return
    }
    if(this.userDetails.emailId == "" || this.userDetails.emailId.trim().length == 0){
      this.toastr.error("Please Enter Email id")
      return
    }
    if(this.userDetails.password == "" || this.userDetails.password.trim().length == 0){
      this.toastr.error("Please Enter Password")
      return
    }
    if(this.userDetails.mobNum == ""){
      this.toastr.error("Please Enter Mobile Number")
      return
    }
    if(!this.regexForEmail.test(this.userDetails.emailId)){
      this.toastr.error("Email format : aaaa@bbbb.com")
      return
    }
    if(!this.regexForPass.test(this.userDetails.password)){
      this.toastr.error("Password: 8-16 characters, 1 Capital, 1 Small, 1 Number & 1 Special Char")
      return
    }
    if(!this.regexForMob.test(this.userDetails.mobNum)){
      this.toastr.error("Mobile Number should be of 10 digits")
      return
    }
    this.spin.show().then(()=>{
      this.signupService.signupUser(this.userDetails).subscribe((resp)=>{
        this.spin.hide()
        this.toastr.warning(resp)
        console.log(resp);
        
      })
    })
  }
}
