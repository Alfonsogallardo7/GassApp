import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GasolineraFirebaseService } from 'src/app/services/gasolinera-firebase.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router,
    private gasolineraFirebaseService: GasolineraFirebaseService) { }

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

  getFavoritos() {
    return this.gasolineraFirebaseService.getFavorites();
  }

}
