import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = 
[
    {
        path: 'login', 
        component: LoginComponent
    },
     // default route
     { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full'
    },
    // after successful login components
    {
        path: '', 
        component: LayoutComponent, 
        children: 
        [
            { path: 'weather', component: WeatherComponent}
        ]
    },
    // wild card route
    { 
        path: '**', 
        redirectTo: 'login', 
        pathMatch: 'full'
    },
];
