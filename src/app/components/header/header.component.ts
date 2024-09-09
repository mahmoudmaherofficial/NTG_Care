import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuIcon = document.getElementById('burger');
}
