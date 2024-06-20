import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: LoginComponent
    }, 
    {
        path: 'home',
        canActivate: [authGuard],
        loadComponent: () => import('./home/home.component').then(module => module.HomeComponent),
    },
    {
        path: 'transactions',
        canActivate: [authGuard],
        loadComponent: () => import('./transactions/transactions.component').then(module => module.TransactionsComponent),
    },
    {
        path: 'user-profile',
        canActivate: [authGuard],
        loadComponent: () => import('./user-profile/user-profile.component').then(module => module.UserProfileComponent),
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./dashboard/dashboard.component').then(module => module.DashboardComponent),
    },
    // {
    //     path: '**',
    //     redirectTo: 'login'
    // }
];
