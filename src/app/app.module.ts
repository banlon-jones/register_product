import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInfoComponent } from './pages/form-info/form-info.component';
import { ListInfoComponent } from './pages/list-info/list-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInfoComponent,
    ListInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
