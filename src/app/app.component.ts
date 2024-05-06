import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
})
export class AppComponent implements OnInit {
  title = 'Atlas';

  constructor() {}

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
  }
}
