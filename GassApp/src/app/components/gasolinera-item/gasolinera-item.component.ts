import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FavoriteList, ListaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { DialogGasolineraDetailsComponent } from '../dialog-gasolinera-details/dialog-gasolinera-details.component';
import { LoginComponent } from '../login/login.component';
import firebase from 'firebase/compat/app';


const COLLECTION_FAVORITE = 'favorite';
@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {
  gasolineraList!: Observable<FavoriteList[]>

  @Input() gasolineraInput!: ListaEESSPrecio;
  constructor(private dialog: MatDialog, 
    private gasolineraService: GasolineraService, 
    private login: LoginComponent,
    public auth: AngularFireAuth, 
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  openDetailGasolinera(iddes:string | undefined) {
    this.dialog.open(DialogGasolineraDetailsComponent, {
      height: 'auto',
      width: 'auto',
      data: {gasolinera: this.gasolineraInput}
    });
  }

  addGasolineraToFavorite(){
    if(this.gasolineraService.isLoggedIn()) {
      this.firestore.collection(COLLECTION_FAVORITE).doc(this.gasolineraInput.ideess)
      .set({ name: this.gasolineraInput?.rotulo,
        direccion: this.gasolineraInput?.direccion,
        municipio: this.gasolineraInput?.municipio});
      localStorage.setItem('name', this.gasolineraInput?.rotulo?this.gasolineraInput?.rotulo: '');
      localStorage.setItem('direccion', this.gasolineraInput?.direccion?this.gasolineraInput?.direccion: '');
      localStorage.setItem('municipio', this.gasolineraInput?.municipio? this.gasolineraInput?.municipio: '');
      localStorage.setItem('uid', this.gasolineraInput.ideess?this.gasolineraInput.ideess: '');
    }else{
      this.login.login();
    } 
     
  }

}
