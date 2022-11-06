import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import { ToastrService } from "ngx-toastr"

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(private loginService: LoginService , private router: Router,private userService : UserService,private toastr : ToastrService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.getToken() != "" && this.userService.getToken() !=null){
        this.userService.getCurrentUser().subscribe((res)=>{
          if(res.status == 200) {
            return true
          } else{
            this.loginService.logOutUser()
            this.router.navigateByUrl("/login")
            return false
          }
        },err =>{
          console.log("there is an error",err);
          this.loginService.logOutUser()
          this.router.navigateByUrl("/login")
          return false
        })
        return true
      }else {
        this.toastr.error("Please Log In")
        this.router.navigateByUrl("/login")
        return false
      }
  }
  
}
