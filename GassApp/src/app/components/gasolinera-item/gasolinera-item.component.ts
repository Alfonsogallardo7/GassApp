import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { DialogGasolineraDetailsComponent } from '../dialog-gasolinera-details/dialog-gasolinera-details.component';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {
  @Input() gasolineraInput!: ListaEESSPrecio;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetailGasolinera(iddes:string | undefined) {
    this.dialog.open(DialogGasolineraDetailsComponent, {
      height: 'auto',
      width: 'auto',
      data: {gasolinera: this.gasolineraInput}
    });
  }

}
