import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductEditComponent} from "./product-edit/product-edit.component";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products/new', component: ProductEditComponent},
  { path: '**', component: DashboardComponent }
];

