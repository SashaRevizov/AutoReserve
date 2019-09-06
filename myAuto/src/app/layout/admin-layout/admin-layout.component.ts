import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/assets/services/admin.service';
import { Router } from '@angular/router';
declare var M
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private auth: AdminService, private router: Router) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems);
    });
  }
  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/'])
  }
}
