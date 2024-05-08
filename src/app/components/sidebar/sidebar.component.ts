import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgbNavModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  currentRoute: string = '/home';

  constructor(private router: Router) {}
  updateCurrentRoute(route: string) {
    this.currentRoute = route;
  }
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      //TODO: Write unit test for this subscription
      this.updateCurrentRoute(this.router.url);
    });
  }
}
