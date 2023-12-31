import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    LoginComponent,
    RegisterComponent,
  ],
})
export class RoutesModule {}
