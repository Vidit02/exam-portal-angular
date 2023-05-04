import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private loginService : LoginService , private userService : UserService , private router : Router) { }

  ngOnInit(): void {
    this.isUser();
  }

  logout(){
    this.loginService.logOutUser();
  }

  isUser(){
    if(this.router.url.includes("/user")){
      return true;
    } else {
      return false;
    }
  }
}
