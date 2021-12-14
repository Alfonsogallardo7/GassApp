import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolinerasFavoritasListComponent } from './components/gasolineras-favoritas-list/gasolineras-favoritas-list.component';
import { ListasComponent } from './components/listas/listas.component';
import { LoginComponent } from './components/login/login.component';
import { GasolineraListComponent } from './pages/gasolinera-list/gasolinera-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', pathMatch: 'full', redirectTo: '/login' },
  { path: 'gasolinera-list', component: GasolineraListComponent},
  { path: 'listas', pathMatch: 'full', component: ListasComponent },
  { path: 'gasolineras-favoritas-list', pathMatch: 'full', component: GasolinerasFavoritasListComponent}, 
  {path: '', pathMatch: 'full', component: GasolineraListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
