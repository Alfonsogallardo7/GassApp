import { Component, OnInit } from '@angular/core';
import { GasolineraFavFirebase } from 'src/app/models/interfaces/gasolinera-firebase.interface';
import { GasolineraFirebaseService } from 'src/app/services/gasolinera-firebase.service';

@Component({
  selector: 'app-gasolineras-favoritas-list',
  templateUrl: './gasolineras-favoritas-list.component.html',
  styleUrls: ['./gasolineras-favoritas-list.component.css']
})
export class GasolinerasFavoritasListComponent implements OnInit {
  gasolinerasFavList: GasolineraFavFirebase[] = [];
  constructor(private gasolineraFirebaseService: GasolineraFirebaseService) { }

  ngOnInit(): void {
    this.gasolineraFirebaseService.getFavorites().subscribe(resp => {
      this.gasolinerasFavList = resp;
    });
  }

  deleteFavorito(gasolinera: GasolineraFavFirebase) {
    this.gasolineraFirebaseService.deleteFavorite(gasolinera.id).then(resp => {
      alert(`eliminada la gasolinera ${gasolinera.rotulo}`)
    })
  }

}
