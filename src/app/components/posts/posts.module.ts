import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsHomeComponent } from './posts-home/posts-home.component';
import { PostsLayoutComponent } from '../_layouts/posts-layout/posts-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostssCardComponent } from './postss-card/postss-card.component';
import { PostsSidebarComponent } from './posts-sidebar/posts-sidebar.component';


@NgModule({
  declarations: [
    PostsHomeComponent,
    PostsLayoutComponent,
    PostssCardComponent,
    PostsSidebarComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
  ]
})
export class PostsModule { }
