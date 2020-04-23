import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.scss']
})
export class DashboardSettingsComponent implements OnInit {

  constructor(public sharedService: SharedService, private router: Router, private titleService: Title ) { 
this.sharedService.activityInfo.name = 'Settings';
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
