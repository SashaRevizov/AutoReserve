import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Car } from 'src/assets/interfaces';
import { ClientService } from 'src/assets/services/client.service';
declare var M
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private client: ClientService) { }
  form: FormGroup
  aSub: Subscription
  cars$: Observable<Car>

  ngOnInit() {
    this.client.getCars().subscribe((data:any) => {this.cars$ = data;});
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      startCity: new FormControl(null, [Validators.required]),
      dateEnd: new FormControl(null, [Validators.required]),
      endCity: new FormControl(null, [Validators.required]),
      dateStart: new FormControl(null, [Validators.required])
    })
  

    
  }
  onSubmit(){
    
  }
}
