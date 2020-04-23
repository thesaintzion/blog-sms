import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { filter } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { Router,  NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  constructor(public sharedService: SharedService, private router: Router, private titleService: Title ) {

this.sharedService.activityInfo.name = 'Admin';
this.sharedService.activityInfo.showArrowBack = false;

   }


  // start form up...
  startUp(){
  return  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => window.scrollTo(0, 0));  
  }

    // Set page title
    dynamicTitle(){
      this.titleService.setTitle('');
      const appTitle = this.titleService.getTitle();
      this.titleService.setTitle(`${this.sharedService.activityInfo.name} - Just a Thought`);
    }

  ngOnInit() {
    this.startUp();
   this.dynamicTitle();
  }

}
