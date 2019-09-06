import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MaterialInstance, MaterialService } from 'src/assets/services/material.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/assets/interfaces';
import { Observable } from 'rxjs';
import { AdminService } from 'src/assets/services/admin.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  @ViewChild('modalD', {static: false}) modalRef: ElementRef

  modal: MaterialInstance
  selectedCar: Car
  cars$: Observable<Car>
  imagePreview = ''
  constructor(private route: ActivatedRoute,private router: Router, private admin: AdminService, private http: HttpClient) { }

  ngOnInit() {
   
   this.admin.process().subscribe((data:any) => {this.cars$ = data;});


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
          this.cars$ = this.admin.getCars()
          MaterialService.toast("Замовлення видалено")
        },
          error => MaterialService.toast(error.error.message),

        )
    }
  }
  active(){
    return this.admin.proc(this.selectedCar).subscribe(
      ()=> {
        MaterialService.toast("Статус змінено")
        this.cars$ = this.admin.process()
        this.modal.close()
      },
      error => {
          MaterialService.toast(error.error.message)
      }
    )
  }
}
