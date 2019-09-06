import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin, Car } from '../interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private token = null
constructor(private http: HttpClient) { }
login(admin: Admin): Observable<{token: string}>{
  return this.http.post<{token: string}>('http://localhost:8080/admin/login', admin)
  .pipe(tap(
    ({token}) => {
      localStorage.setItem('auth-token', token)
      this.setToken(token)
    }
  ))

}
delCar(id: string):Observable<Car>{
  return this.http.delete<Car>(`http://localhost:8080/admin/car/${id}`)
}
create(city: string, mark: string, carcase: string, engineCapacity: string, fuelType: string, transmissionType: string, price: string, priceZ: string, costFuel: string, class1: string, image:File): Observable<any> {
  const fd = new FormData()

  fd.append('image', image)
  fd.append('city', city)
  fd.append('mark', mark)
  fd.append('carcase',carcase)
  fd.append('engineCapacity',engineCapacity)
  fd.append('fuelType', fuelType)
  fd.append('transmissionType', transmissionType)
  fd.append('price', price)
  fd.append('priceZ', priceZ)
  fd.append('costFuel', costFuel)
  fd.append('class', class1)

  return this.http.post<any>('http://localhost:8080/admin/addCar', fd)

}
getCars():Observable<any>{
  return this.http.get<Car>('http://localhost:8080/admin/car')
}
process():Observable<Car>{
  return this.http.get<Car>('http://localhost:8080/admin/process')
}
proc(car: Car){
    return this.http.patch('http://localhost:8080/admin/process', car)
}
proc1(car: Car){
  return this.http.patch('http://localhost:8080/admin/car', car)
}
setToken(token: string){
  this.token = token
}
getToken():string{
  return this.token
}

isAuth():boolean{
 return !!this.token
}

logout(){
  this.setToken(null)
  localStorage.clear()
}
}
