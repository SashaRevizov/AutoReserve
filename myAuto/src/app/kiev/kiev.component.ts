import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material'
import { Subscription, Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ClientService } from 'src/assets/services/client.service';
import { Car } from 'src/assets/interfaces';
import { Router } from '@angular/router';
import { MaterialService } from 'src/assets/services/material.service';
@Component({
  selector: 'app-kiev',
  templateUrl: './kiev.component.html',
  styleUrls: ['./kiev.component.css']
})
export class KievComponent implements OnInit {
  length = 100
  pageSize = 10
  pageSizeOptions = [1,2,5,10]
  form: FormGroup
  aSub: Subscription
  cars$: Observable<Car>
  car: Car
  constructor(private client: ClientService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
    this.client.getCars().subscribe((data)=>{this.cars$ = data})
  }
  onSubmit(){}
  sort(value){
    MaterialService.toast(value)
  }
}
