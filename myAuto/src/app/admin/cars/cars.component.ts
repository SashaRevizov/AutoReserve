import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MaterialInstance, MaterialService } from 'src/assets/services/material.service';
import { Car } from 'src/assets/interfaces';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/assets/services/admin.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('modalD', {static: false}) modalRef: ElementRef

   modal: MaterialInstance
   selectedCar: Car
   cars$: Observable<Car>
   imagePreview = ''
   constructor(private route: ActivatedRoute,private router: Router, private admin: AdminService, private http: HttpClient) { }

   ngOnInit() {
    
    this.admin.getCars().subscribe((data:any) => {this.cars$ = data;});


   }
   ngAfterViewInit(){
    this.modal = MaterialService.initModal(this.modalRef)
  }
   ngOnDestroy(){
     this.modal.destroy()
   }
  

   selectOrder(car: Car ){
     this.selectedCar = car
     this.modal.open()


   }
   closeModal() {
     this.modal.close()
   }

   delete() {
     const decision = window.confirm(`Ви дійсно хочете видалити замовлення №${this.selectedCar.mark}`)

     if (decision) {
       this.admin.delCar(this.selectedCar._id)
         .subscribe(
           () => {
           this.modal.close()
           this.admin.getCars().subscribe((data:any) => {this.cars$ = data;});
           MaterialService.toast("Замовлення видалено")
         },
           error => MaterialService.toast(error.error.message),

         )
     }
   }
   active(){

   }

}
