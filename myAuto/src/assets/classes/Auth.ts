import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { AdminService } from '../services/admin.service';
@Injectable({
    providedIn: 'root'
})
export class Auth implements CanActivate, CanActivateChild {
    constructor(private auth: AdminService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        if(this.auth.isAuth()){
            return of(true)
        }else{
            this.router.navigate(['/admin'],{
                queryParams: {
                    accessDenied: true
                }
            })
            return of(false)
        }
    }
    

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        return this.canActivate(route, state)
    }
}
