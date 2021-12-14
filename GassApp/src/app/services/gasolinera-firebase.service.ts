import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GasolineraFavFirebase } from '../models/interfaces/gasolinera-firebase.interface';
import { ListaEESSPrecio } from '../models/interfaces/gasolinera.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolineraFirebaseService {

  constructor(private firestore: AngularFirestore) { }

  addFavorite(gasolinera: ListaEESSPrecio) {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection(`users/${userId}/favorites`).doc(gasolinera.ideess).set({
      id: gasolinera.ideess,
      direccion: gasolinera.direccion,
      rotulo: gasolinera.rotulo,
      uid: localStorage.getItem('uid')
    });
  }
  
  getFavorites(): Observable<GasolineraFavFirebase[]> {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection<GasolineraFavFirebase>(`users/${userId}/favorites`).valueChanges();
  }

  deleteFavorite(docId: string) {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection(`users/${userId}/favorites`).doc(docId).delete();
  }
}
