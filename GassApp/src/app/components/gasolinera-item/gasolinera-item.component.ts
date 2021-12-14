import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { GasolineraFirebaseService } from 'src/app/services/gasolinera-firebase.service';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { DialogGasolineraDetailsComponent } from '../dialog-gasolinera-details/dialog-gasolinera-details.component';
import { LoginComponent } from '../login/login.component';

const COLLECTION_FAVORITE = 'favorite';
@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {
  @Input() gasolineraInput!: ListaEESSPrecio;
  constructor(private dialog: MatDialog, 
    private gasolineraService: GasolineraService, 
    public auth: AngularFireAuth, 
    private firestore: AngularFirestore,
    private gasolineraFirebaseService: GasolineraFirebaseService) { }

  ngOnInit(): void {
  }

  openDetailGasolinera(iddes:string | undefined) {
    this.dialog.open(DialogGasolineraDetailsComponent, {
      height: 'auto',
      width: 'auto',
      data: {gasolinera: this.gasolineraInput}
    });
  }

  addFavorito(){
    this.gasolineraFirebaseService.addFavorite(this.gasolineraInput).then(resp => {

    });
  }

}
