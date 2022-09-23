import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router ,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  isAdmin:boolean=false;

  constructor(
    private adminService: AdminService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  var isAdmin= this.adminService.adminSubject.subscribe(
    data => 
    {
      console.log('next subscribed value: ' + data);
      this.isAdmin = data;
    })

    
  if ( this.isAdmin==false) {
    console.log('inside false ' + this.isAdmin);
      this.router.navigate(['/login']);
      return false;
  }else {
    console.log('next subscribed value:t3etg ' + this.isAdmin);
    return true;
  }
}
  
}
