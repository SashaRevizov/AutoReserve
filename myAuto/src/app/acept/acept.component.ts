import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminComponent } from '../admin/admin.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/assets/services/client.service';
import { MaterialService } from 'src/assets/services/material.service';
import { Car } from 'src/assets/interfaces';

@Component({
  selector: 'app-acept',
  templateUrl: './acept.component.html',
  styleUrls: ['./acept.component.css']
})
export class AceptComponent implements OnInit {
  @ViewChild('check', {static: false}) check: ElementRef;
  aSub: Subscription
  form: FormGroup
  car: Car
  id: string
  price: number
  constructor(private client:ClientService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
   
    this.form = new FormGroup({
      pib: new FormControl(null, Validators.required),
      birthsday: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      startPlace: new FormControl(null),
      dateStart: new FormControl(null, Validators.required),
      endPlace: new FormControl(null),
      dateEnd: new FormControl(null, Validators.required)
    })
    this.route.params.subscribe(params=>this.id=params['id'])
    this.client.getCar(this.id).subscribe((data)=>{this.car = data})

  }



  onSubmit(){

    this.aSub = this.client.reserv(this.car._id,this.form.value).subscribe(
      ()=> {
        this.router.navigate(['/'])
        MaterialService.toast(`Машину заброньовано`)
   },
      error => {
        MaterialService.toast(error.error.message)
      }
    );
  }
}
