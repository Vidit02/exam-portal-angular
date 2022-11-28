import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { UserService } from "./user.service";

@Injectable()
export class AuthReqInterceptor implements HttpInterceptor{
    constructor(private loginService : LoginService,private userService : UserService){
    }
    intercept(req: HttpRequest<any> , next: HttpHandler):Observable<HttpEvent<any>>{
        const bearer = this.userService.getToken()
        let request = req
        if(bearer!= null && bearer!= ""){
            // console.log("Bearer ",bearer);
            
            request = request.clone({setHeaders:{Authorization:`${bearer}`}})
        }
        return next.handle(request)
    }
}

export const authInterceptor = [
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthReqInterceptor,
        multi:true
    }
]