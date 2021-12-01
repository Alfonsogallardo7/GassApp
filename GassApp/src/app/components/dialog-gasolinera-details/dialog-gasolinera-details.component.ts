import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-dialog-gasolinera-details',
  templateUrl: './dialog-gasolinera-details.component.html',
  styleUrls: ['./dialog-gasolinera-details.component.css']
})
export class DialogGasolineraDetailsComponent implements OnInit {
  gasolinera!: ListaEESSPrecio;
  @Input() gasolineraInput!: ListaEESSPrecio;
  constructor(@Inject(MAT_DIALOG_DATA) 
  private data: DialogGasolineraDetailsComponent,
  private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.gasolinera = this.data.gasolinera;
  }

}
