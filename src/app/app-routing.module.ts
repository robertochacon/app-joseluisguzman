import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { StartComponent } from './components/start/start.component';
import { ShareComponent } from './components/share/share.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContentsComponent } from './components/contents/contents.component';
import { GuideComponent } from './components/guide/guide.component';
import { GuideContentsComponent } from './components/guide-contents/guide-contents.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'start', component: StartComponent},
  {path: 'share', component: ShareComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'contents', component: ContentsComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'guide-contents/:category/:name', component: GuideContentsComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
