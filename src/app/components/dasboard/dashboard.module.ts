import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from '../_layouts/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuillModule } from 'ngx-quill';
import { DashboardAddBlogComponent } from './dashboard-add-blog/dashboard-add-blog.component';
import { DashboardAllBlogsComponent } from './dashboard-all-blogs/dashboard-all-blogs.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardGalleryComponent } from './dashboard-gallery/dashboard-gallery.component';
import { DashboardViewPhotoComponent } from './dashboard-view-photo/dashboard-view-photo.component';
import { DashboardYoutubeComponent } from './dashboard-youtube/dashboard-youtube.component';




@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardHomeComponent,
    DashboardSettingsComponent,
    DashboardAddBlogComponent,
    DashboardAllBlogsComponent,
    DashboardUsersComponent,
    DashboardProfileComponent,
    DashboardGalleryComponent,
    DashboardViewPhotoComponent,
    DashboardYoutubeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    // QuillModule,
    QuillModule.forRoot(),
  ]
})
export class DashboardModule { }
