import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
  }

  getName() {
    return localStorage.getItem('name')? localStorage.getItem('name') : 'Login';
  }

  getPhoto() {
    return localStorage.getItem('photo');
  }

  logout() {
    this.firebaseAuth.signOut().then(resp =>{
      localStorage.clear();
      this.router.navigate(['']);
    });
  }

}
