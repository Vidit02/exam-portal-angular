import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr'
import { NgxSpinnerService} from "ngx-spinner"
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private toastr: ToastrService , private loginService: LoginService,private spin : NgxSpinnerService,private router : Router ) { }

  ngOnInit(): void {
  }

  rememberMe : boolean  = false
  public loginDetails = {
    emailId : "",
    password : ""
  }

  loginUser(){
    if(!this.rememberMe){
      this.toastr.warning("Please check remember me")
      return
    }
    if(this.loginDetails.emailId == "" || this.loginDetails.emailId.trim().length == 0){
      this.toastr.error("Please Enter Email")
      return 
    }
    if(this.loginDetails.password == "" || this.loginDetails.password.trim().length == 0){
      this.toastr.error("Please Enter Password")
      return
    } 

    this.spin.show().then(()=>{
      this.loginService.loginUser(this.loginDetails).subscribe((resp)=>{
        this.spin.hide()
        if(resp.status == 200){
          console.log(resp);
          Swal.fire("Success",`User logged in...`,"success")
          sessionStorage.setItem("bearer" , resp.token)
          if(resp.role.roleName === "admin"){
            this.router.navigateByUrl("/admin")
          } else {
            this.router.navigateByUrl("/user")
          }
          this.userService.getCurrentUser().subscribe((res)=>{
          console.log(res);  
          })
        }else if(resp.status == 401){
          Swal.fire("Warning","Invalid Credentials Entered","error")
        } else{
          Swal.fire("Error","Something is wrong","error")
        }
      })
    })
  }
}
