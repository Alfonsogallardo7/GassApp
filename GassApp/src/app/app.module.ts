import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GasolineraItemComponent } from './components/gasolinera-item/gasolinera-item.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GasolineraListComponent } from './pages/gasolinera-list/gasolinera-list.component';
import { DialogGasolineraDetailsComponent } from './components/dialog-gasolinera-details/dialog-gasolinera-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GasolineraItemComponent,
    GasolineraListComponent,
    DialogGasolineraDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
