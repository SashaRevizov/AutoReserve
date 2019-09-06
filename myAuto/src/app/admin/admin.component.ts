import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/assets/services/admin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaterialService } from 'src/assets/services/material.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  form: FormGroup
  aSub: Subscription
  constructor(private auth:AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

  }

  ngOnDestroy(){
    if(this.aSub){
      this.aSub.unsubscribe()
    }
    this.route.queryParams.subscribe((params: Params)=>{
     if (params['accessDenied'])
        MaterialService.toast("Авторизуйтесь")
    })
  }

  onSubmit(){
    this.aSub = this.auth.login(this.form.value).subscribe(
      ()=> {
        this.router.navigate(['/admin/car'])
    },
      error => {
        MaterialService.toast(error.error.message)
      }
    );
  }

}
