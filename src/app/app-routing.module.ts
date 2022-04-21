import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProductComponent} from './pages/form-info/create-product.component';
import {LandingPageComponent} from './pages/list-info/landing-page.component';

const routes: Routes = [
  {
    path: '', component: CreateProductComponent,
  },
  {
    path: 'list-info', component: LandingPageComponent,
  },
  {
    path: 'form-info', component: CreateProductComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
