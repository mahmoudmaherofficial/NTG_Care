import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent, AboutUsComponent, ServicesComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
