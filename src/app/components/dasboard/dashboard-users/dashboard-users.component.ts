import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss']
})
export class DashboardUsersComponent implements OnInit {

  constructor(public sharedService: SharedService, private router: Router, private titleService: Title) { 
    this.sharedService.activityInfo.name = 'Users';
    this.sharedService.activityInfo.showArrowBack = true;
      }

// Set page title
      dynamicTitle(){
        const appTitle = this.titleService.getTitle();
        this.titleService.setTitle(`${this.sharedService.activityInfo.name} - ${appTitle}`);
      }
    

  ngOnInit() {
    this.dynamicTitle();
  }

}
