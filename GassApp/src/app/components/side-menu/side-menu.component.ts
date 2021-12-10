import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/interfaces/user.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  userList!: Observable<User[]>;
  currentPage = 'porfile';
  constructor() { }

  ngOnInit(): void {
  }



}
