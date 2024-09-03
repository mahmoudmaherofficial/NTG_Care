import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
