import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MaterialService } from 'src/assets/services/material.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/assets/services/admin.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @ViewChild('input',{static: false}) inputRef: ElementRef
  aSub: Subscription
  form: FormGroup
  image: File
  imagePreview = ''
  constructor(private admin: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.form = new FormGroup({
      city: new FormControl(null, Validators.required),
      mark: new FormControl(null, Validators.required),
      carcase: new FormControl(null, Validators.required),
      engineCapacity: new FormControl(null, Validators.required),
      fuelType: new FormControl(null, Validators.required),
      transmissionType: new FormControl(null),
      price: new FormControl(null, Validators.required),
      priceZ: new FormControl(null, Validators.required),
      costFuel: new FormControl(null, Validators.required),
      class: new FormControl(null, Validators.required)
    })

  }


  
  onSubmit(){

    this.aSub = this.admin.create(this.form.value.city, this.form.value.mark, this.form.value.carcase, this.form.value.engineCapacity,this.form.value.fuelType, this.form.value.transmissionType,
      this.form.value.price, this.form.value.priceZ, this.form.value.costFuel, this.form.value.class, this.image).subscribe(
      ()=> {
        this.router.navigate(['/admin/car']) 
        MaterialService.toast(`Машину добавлено.`)
        
    },
      error => {
        MaterialService.toast(error.error.message)
      }
    );
  }
  triggerClick() {
    this.inputRef.nativeElement.click()
  }
  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file
    const reader = new FileReader()

    reader.onload = () => {
      this.imagePreview = reader.result as string
    }
    reader.readAsDataURL(file)
  }

}
