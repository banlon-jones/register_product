import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormInfoComponent} from './pages/form-info/form-info.component';
import {ListInfoComponent} from './pages/list-info/list-info.component';

const routes: Routes = [
  {
    path: '', component: FormInfoComponent,
  },
  {
    path: 'list-info', component: ListInfoComponent,
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
