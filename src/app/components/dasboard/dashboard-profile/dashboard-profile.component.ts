import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

  constructor(public sharedService: SharedService, private router: Router, private titleService: Title) { 
    this.sharedService.activityInfo.name = 'Profile';
    this.sharedService.activityInfo.showArrowBack = true;
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
