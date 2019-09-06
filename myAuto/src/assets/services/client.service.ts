import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car, Reserv } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

constructor(private http: HttpClient) { }


getCars():Observable<any>{
  return this.http.get<Car>('http://localhost:8080/kiev')
}
getCar(id: string):Observable<Car>{
  return this.http.get<Car>(`http://localhost:8080/kiev/reserv/${id}`)
}
reserv(id: string, reserv: Reserv):Observable<Car>{
  return this.http.post<Car>(`http://localhost:8080/kiev/reserv/${id}`,reserv)
}

}
