import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPgComponent } from 'src/login-pg/login-pg.component';
import { RegistrationPgComponent } from 'src/registration-pg/registration-pg.component';

const routes: Routes = [
  {path:'login', component:LoginPgComponent},
  {path:'registration', component:RegistrationPgComponent},
  {path:'', redirectTo:'registration', pathMatch:'full'},
  {path:'**', redirectTo:'registration', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
