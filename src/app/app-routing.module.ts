import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotolistComponent } from './photolist/photolist.component';
import { BlogstableComponent } from './blogstable/blogstable.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'photolist', component: PhotolistComponent},
  {path: 'blogstable', component: BlogstableComponent},
 {path : '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
