import { Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private ipc!: any;
  constructor() { 
    // eslint-disable-next-line no-useless-catch
    this.ipc = window.ipcApi;
  }

  minimize() {
    // Logic to minimize the window
    this.ipc.minimizeWindow();
  }

  maximize() {
    // Logic to maximize the window
    this.ipc.maximizeWindow();
  }

  close() {
    // Logic to close the window
    this.ipc.closeWindow();
  }
}
