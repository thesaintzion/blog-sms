import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-view-photo',
  templateUrl: './dashboard-view-photo.component.html',
  styleUrls: ['./dashboard-view-photo.component.scss']
})
export class DashboardViewPhotoComponent implements OnInit {
  photoPath;
  constructor(private sharedService: SharedService, 
    private router: Router, 
    private titleService: Title, 
    private activatedRoute: ActivatedRoute, private apiService: ApiService,  public location: Location) {
    this.sharedService.activityInfo.name = 'Photo';
    this.sharedService.activityInfo.showArrowBack = true;
   }


     // Set page title
     dynamicTitle(){
      this.titleService.setTitle('');
      this.titleService.setTitle(`${this.sharedService.activityInfo.name} - Just a Thought`);
    }


  ngOnInit() {
    this.dynamicTitle();
    this.activatedRoute.queryParamMap.subscribe( paramMap => {
      if(paramMap.get('photo')){
        this.photoPath = paramMap.get('photo');
      }else{
        this.sharedService.openSnackBar('Oops..!! Invalid request', '', 3000, 'bg-danger');
        this.location.back();
      }
     
  })
  }

}
