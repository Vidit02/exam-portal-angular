import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import { ToastrService } from "ngx-toastr"
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private loginService: LoginService , private router: Router,private adminService :AdminService,private toastr : ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.adminService.getToken() != "" && this.adminService.getToken() !=null){
        this.adminService.getCurrentAdmin().subscribe((res)=>{
          if(res.status == 200 && res.user.role.roleName === 'admin') {
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
