import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-layout',
  templateUrl: './post-layout.component.html',
  styleUrls: ['./post-layout.component.scss']
})
export class PostLayoutComponent implements OnInit {

  constructor(public sharedService: SharedService, 
    private router: Router, 
    private titleService: Title, 
    private activatedRoute: ActivatedRoute, public apiService: ApiService,  public location: Location) {
    this.sharedService.activityInfo.name = 'Post';
    this.sharedService.activityInfo.showArrowBack = true;
    
   }



    // Set page title
    dynamicTitle(){
      this.titleService.setTitle('');
      const appTitle = this.titleService.getTitle();
      this.titleService.setTitle(`${this.sharedService.activityInfo.name} - Just a Thought`);
    }


  ngOnInit() {
  }

}
