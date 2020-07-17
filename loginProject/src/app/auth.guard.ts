import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

// import { AuthenticationService } from '@/_services';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private auth: AuthenticationService
) {}
  canActivate(
   next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :Observable<boolean> | Promise<boolean> | boolean 
        
     {
      return this.auth.isLoggedIn;
     }
    
}

