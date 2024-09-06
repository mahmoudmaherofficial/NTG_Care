import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: '**', component: NotFoundComponent },
];
