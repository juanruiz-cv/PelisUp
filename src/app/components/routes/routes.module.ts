import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule, FormsModule],
  exports: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    LoginComponent,
    RegisterComponent,
  ],
})
export class RoutesModule {}
