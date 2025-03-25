import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductEditComponent} from "./product-management/product-edit/product-edit.component";
import {ProductManagementComponent} from "./product-management/product-management.component";

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {
        path: 'products', component: ProductManagementComponent, children: [
            {
                path: '**',
                component: ProductEditComponent
            }
        ]
    },
    {path: '**', component: DashboardComponent}
];

