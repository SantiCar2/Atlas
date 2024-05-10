import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'library', component: HeaderComponent },
  { path: 'downloads', component: HeaderComponent },
  { path: 'settings', component: SettingsComponent },
];
