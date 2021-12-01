import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolineraListComponent } from './pages/gasolinera-list/gasolinera-list.component';

const routes: Routes = [
  {path: 'gasolinera-list', component: GasolineraListComponent},
  {path: '', pathMatch: 'full', component: GasolineraListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
