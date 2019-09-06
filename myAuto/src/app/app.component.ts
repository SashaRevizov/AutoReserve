import { Component } from '@angular/core';
import { AdminService } from 'src/assets/services/admin.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'myAuto';
  constructor(private auth: AdminService){

  }
  ngOnInit(){
    const potrntialToken = localStorage.getItem('auth-token')
    if (potrntialToken !== null){
      this.auth.setToken(potrntialToken)
    }
 
    

  }
}
