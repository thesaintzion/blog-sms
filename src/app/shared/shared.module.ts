import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './materials/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';




@NgModule({
  declarations: [
    // ScrollUpComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
   
    
  ],
  exports:[
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    //  ScrollUpComponent,
    
    
  ]
})
export class SharedModule { }
