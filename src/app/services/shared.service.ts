import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // This is the dasboard header info 
  activityInfo = {
    name: null,
    showArrowBack: null
  }
  constructor(private snackBar: MatSnackBar, private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {  }
    // snackBar message
    openSnackBar(message: string, action: string, duration: number, panelClass: string) {
      this.snackBar.open(message, action, {
        duration,
        panelClass,
      });
    }

    // Set apge title
    dynamicTitle(router){
      this.titleService.setTitle(``);
      const appTitle = this.titleService.getTitle();
      this.titleService.setTitle(`${this.activityInfo.name} - ${appTitle}`);
      // const appTitle = this.titleService.getTitle();

      // router
      //   .events.pipe(
      //     filter(event => event instanceof NavigationEnd),
      //     map(() => {
      //       const child = this.activatedRoute.firstChild;
      //       if (child.snapshot.data['title']) {
      //         return child.snapshot.data['title'];
      //       }else{
      //         return appTitle;
      //       } 
      //     })
      //   ).subscribe((ttl: string) => {
      //     this.titleService.setTitle(ttl);
      //   });
    }
    

 
}
