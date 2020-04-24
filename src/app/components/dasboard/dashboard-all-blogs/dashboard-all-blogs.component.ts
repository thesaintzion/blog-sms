import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-all-blogs',
  templateUrl: './dashboard-all-blogs.component.html',
  styleUrls: ['./dashboard-all-blogs.component.scss']
})
export class DashboardAllBlogsComponent implements OnInit {
  blogs = [];
  indeterminate = false;
  checked = false;
  constructor(public sharedService: SharedService, private titleService: Title) { 
    this.sharedService.activityInfo.name = 'All blogs';
    this.sharedService.activityInfo.showArrowBack = true;

    let blogs = [
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '...'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '...'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '...'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '...'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '...'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '...'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '...'
      },
    
    ];

    this.blogs = blogs;
      }


   // Set page title
   dynamicTitle(){
    this.titleService.setTitle('');
    const appTitle = this.titleService.getTitle();
    this.titleService.setTitle(`${this.sharedService.activityInfo.name} - Just a Thought`);


  }

  ngOnInit() {
    this.dynamicTitle();
  }

}
