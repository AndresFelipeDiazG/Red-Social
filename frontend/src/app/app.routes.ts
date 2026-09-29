import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'muro' },
  {
    path: 'entrar',
    title: 'Entrar',
    canActivate: [guestGuard],
    loadComponent: () => import('./features/auth/login/login').then((m) => m.LoginPage),
  },
  {
    path: 'muro',
    title: 'Muro',
    canActivate: [authGuard],
    loadComponent: () => import('./features/posts/feed/feed').then((m) => m.FeedPage),
  },
  { path: '**', redirectTo: 'muro' },
];
