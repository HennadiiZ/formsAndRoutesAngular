import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component'
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent}, //
  //{path: '', component: HomeComponent, canActivate: [AuthGuard]}, //
  {path: 'sign-up', component: SignUpFormComponent},
  {path: 'log-in', component: LogInFormComponent},
  {path: 'forgot-pass', component: ForgotPassComponent },
  {path: 'error-page', component: ErrorPageComponent },
  {path: '**', redirectTo: '/error-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
