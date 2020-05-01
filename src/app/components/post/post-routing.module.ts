import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostLayoutComponent } from '../_layouts/post-layout/post-layout.component';
import { PostHomeComponent } from './post-home/post-home.component';


const routes: Routes = [
  {path: '', component: PostLayoutComponent, children:[
    {path: '', component: PostHomeComponent},
    {path: '', component: PostHomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
