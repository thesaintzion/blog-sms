import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-posts-layout',
  templateUrl: './posts-layout.component.html',
  styleUrls: ['./posts-layout.component.scss']
})
export class PostsLayoutComponent implements OnInit {

  blur = true;
  welcomeScreen = true;
  bigMenu = true;
  categoryClass;
  showCategory = false;
  
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
    // alert('heryy')
    this.breakpointObserver
        .observe(['(max-width: 767px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            return  sidenav.toggle();
          } else {
            return  sidenav.toggle();
          }
        });
  }

  // closeMen(drawer)

 
  // Quill conf
    quillConfig: any = {
      toolbar: false
    }
  
    ngOnInit() {
      const fadeId = <HTMLInputElement> document.getElementById('fadeId');
      setTimeout( () => {
  this.blur = false;
  this.welcomeScreen = false; 
  fadeId.style.display = 'none';
      }, 6000);


    }
}
