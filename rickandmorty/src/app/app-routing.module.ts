import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent,
  },
  {
    path: '', 
    canActivate:[AuthGuard],
    children: [
      { 
        path: 'home',
        component: HomeComponent,
       
        
      }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'character-profile/:id',
    component: ProfileComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
