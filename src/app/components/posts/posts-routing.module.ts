import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsLayoutComponent } from '../_layouts/posts-layout/posts-layout.component';
import { PostsHomeComponent } from './posts-home/posts-home.component';

const routes: Routes = [
  {path: '', component: PostsLayoutComponent, children:[
    {path: '', component: PostsHomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
