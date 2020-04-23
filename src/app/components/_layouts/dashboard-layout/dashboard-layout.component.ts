import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
users = [];
blur = true;
bigMenu = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(
   private breakpointObserver: BreakpointObserver, 
   private formBuilder: FormBuilder, public sharedService: SharedService,
   public location: Location
   ) { 


   }


     // close menu in phone size
closeMen(sidenav){
  this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          return  sidenav.toggle();
        } else {
          return null;
        }
      });
}
// Quill conf
  quillConfig: any = {
    toolbar: false
  }

  ngOnInit() {
    setTimeout( () => {
this.blur = false;
    }, 4000)
  }

}
