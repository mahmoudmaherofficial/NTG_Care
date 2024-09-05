import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "../footer/footer.component";
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent, AboutUsComponent, ServicesComponent, ContactComponent, FooterComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
