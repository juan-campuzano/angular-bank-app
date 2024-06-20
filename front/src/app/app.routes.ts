import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        canActivate: [authGuard],
        loadComponent: () => import('./home/home.component').then(module => module.HomeComponent),
    },
    {
        path: 'user-profile',
        canActivate: [authGuard],
        loadComponent: () => import('./user-profile/user-profile.component').then(module => module.UserProfileComponent),
    },
    {
        path: 'accounts',
        canActivate: [authGuard],
        children: [
            {
                path: '',
                loadComponent: () => import('./accounts/accounts.component').then(module => module.AccountsComponent),
            },
            {
                path: 'transactions',
                loadComponent: () => import('./transactions/transactions.component').then(module => module.TransactionsComponent),
            }
        ]
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./dashboard/dashboard.component').then(module => module.DashboardComponent),
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
