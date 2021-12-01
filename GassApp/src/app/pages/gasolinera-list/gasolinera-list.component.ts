import { Component, OnInit } from '@angular/core';
import { ListaEESSPrecio, ProvinciaResponse } from 'src/app/models/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {
listGasolinera: ListaEESSPrecio [] = [];
listGasolineraFilter: ListaEESSPrecio [] = [];
listProvincia: ProvinciaResponse[] = [];
provinciaSelected!: string;
precio!: any;


  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(response => {
      let jsonString = JSON.stringify(response);
      this.listGasolinera = this.gasolineraService.parseAnyToGasolineraListResponse(jsonString);
      this.listGasolineraFilter = this.gasolineraService.parseAnyToGasolineraListResponse(jsonString);
    });

    this.gasolineraService.getProvincia().subscribe(response => {
      this.listProvincia = response;
    });
  }

  doFilter(){
    this.listGasolineraFilter = this.listGasolinera.filter(g => g.provincia == this.provinciaSelected)
    .filter(g => g.precioGasolina95E5.split(',').join('.')<this.precio);
  }

}
