import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CoreModule } from 'src/app/core/core.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, HomeComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class BackofficeModule { }
