import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: '**', component: NotFoundComponent },
];
