import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  minimize() {
    // Logic to minimize the window
  }

  maximize() {
    // Logic to maximize the window
  }

  close() {
    // Logic to close the window
    console.log('Close button clicked');
  }
}
