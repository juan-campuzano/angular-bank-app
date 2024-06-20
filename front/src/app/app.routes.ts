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
        // canActivate: [authGuard],
        loadComponent: () => import('./home/home.component').then(module => module.HomeComponent),
    },
    {
        path: 'transactions',
        // canActivate: [authGuard],
        loadComponent: () => import('./transactions/transactions.component').then(module => module.TransactionsComponent),
    },
    // {
    //     path: '**',
    //     redirectTo: 'login'
    // }
];
