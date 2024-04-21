import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPgComponent } from './../login-pg/login-pg.component';
import { RegistrationPgComponent } from './../registration-pg/registration-pg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPgComponent } from './main-pg/main-pg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPgComponent,
    RegistrationPgComponent,
    MainPgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
