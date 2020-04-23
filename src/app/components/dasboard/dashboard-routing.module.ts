import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../_layouts/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { DashboardAddBlogComponent } from './dashboard-add-blog/dashboard-add-blog.component';
import { DashboardAllBlogsComponent } from './dashboard-all-blogs/dashboard-all-blogs.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardGalleryComponent } from './dashboard-gallery/dashboard-gallery.component';
import { DashboardViewPhotoComponent } from './dashboard-view-photo/dashboard-view-photo.component';
import { DashboardYoutubeComponent } from './dashboard-youtube/dashboard-youtube.component';


const routes: Routes = [
  {path: '', component: DashboardLayoutComponent, children:[
    {path: '', component: DashboardHomeComponent, data:{'title': 'Admin - Just a thought'}},
    {path: 'settings', component: DashboardSettingsComponent, data:{'title': 'settings - Just a thought'}},
    {path: 'add-blog', component: DashboardAddBlogComponent, data:{'title': 'Add Blog - Just a thought'}},
    {path: 'all-blogs', component: DashboardAllBlogsComponent, data:{'title': 'All Blogs - Just a thought'}},
    {path: 'users', component: DashboardUsersComponent, data:{'title': 'Users - Just a thought'}},
    {path: 'profile', component: DashboardProfileComponent, data:{'title': 'Profile - Just a thought'}},
    {path: 'gallery', component: DashboardGalleryComponent, data:{'title': 'Gallery - Just a thought'}},
    {path: 'youtube', component: DashboardYoutubeComponent, data:{'title': 'Youtube - Just a thought'}},
    {path: 'photo', component: DashboardViewPhotoComponent, data:{'title': 'Photo - Just a thought'}},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
