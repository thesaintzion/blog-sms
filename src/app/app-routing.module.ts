import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
   { path: 'admin', loadChildren: './components/dasboard/dashboard.module#DashboardModule' },
   { path: '', loadChildren: './components/posts/posts.module#PostsModule' },
   { path: 'post-detail', loadChildren: './components/post/post.module#PostModule' },
  //  { path: '', redirectTo: '/posts', pathMatch: 'full'},

   { path: 'admin-login', component: LoginComponent },
   { path: '404', component: PageNotFoundComponent },
  //  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
