import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  quillEditorRef;
  maxUploadFileSize = 1000000;
  imgUrl;
  prevImgPath;
  uploading;
  galleries = [];
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private sharedService: SharedService, 
    private router: Router, 
    private titleService: Title, 
    private activatedRoute: ActivatedRoute, private apiService: ApiService) {}
 
     


  onBtnClick(img){
    // const img = `<img class="w-100" src="../../../../assets/img/Aggital-2018-in-Review-13.jpg">`;
      this.dialogRef.close(img);
  }

    // 
    imageHandler = (image, callback) => {
      const input = <HTMLInputElement> document.getElementById('fileInputField');
      document.getElementById('fileInputField').onchange = () => {
        let file: File;
        file = input.files[0];
        // file type is only image.
        if (/^image\//.test(file.type)) {
          if (file.size > this.maxUploadFileSize) {
            alert('Image needs to be less than 1MB');
          } else {
            const reader  = new FileReader();
            reader.onload = () =>  {
             
              this.imgUrl =  reader.result;
            
            };
            reader.readAsDataURL(file);
          }
        } else {
            alert('You could only upload images.');
        }
      };

     
  
input.click();
// https://stackblitz.com/edit/angular6-quill-image-handler-example?file=src%2Fapp%2Fapp.component.ts
}
    uploadImg(){
      const input = <HTMLInputElement> document.getElementById('fileInputField');
      document.getElementById('fileInputField').onchange = () => {
        let file: File;
        file = input.files[0];
        // file type is only image.
        if (/^image\//.test(file.type)) {
          if (file.size > this.maxUploadFileSize) {
            alert('Image needs to be less than 1MB');
          } else {
            const reader  = new FileReader();
            reader.onload = () =>  {
              this.imgUrl =  reader.result;
            };
            reader.readAsDataURL(file);

            // start upload
            const formData = new FormData();
            formData.set('image',  file);
            formData.set('imageCaption', 'Good Images');

            let  appName =  'khosi-blog';
            let userId = 'khosi-blog123'; 
           
          
              this.apiService.addImage(formData, appName, userId).subscribe(
              res  => {
                console.log(res);
                this.getGallery();
                setTimeout( ()=>{
                  this.imgUrl = null;
                }, 1000);
                this.sharedService.openSnackBar('Successful.', 'ok', 6000, 'bg-success');
              },
              err => {
                console.log(err);
                setTimeout( ()=>{
                  this.imgUrl = null;
                }, 1000);
                this.sharedService.openSnackBar('Opps..!!, Are you offline??', 'ok', 6000, 'bg-danger');
              });
          }
        } else {
            this.sharedService.openSnackBar('You could only upload images.', 'ok', 6000, 'bg-danger');
        }
      };
  
      input.click();
    }

    getGallery(){
      let userId = 'khosi-blog123'; 
     this.apiService.getGallery(userId).subscribe(
       res => {
         this.galleries = res.galleries;
         // this.sharedService.openSnackBar('Successful', 'ok', 6000, 'bg-success');
         console.log(res, this.galleries);
       },
       err =>{
         // this.sharedService.openSnackBar('Error', 'ok', 6000, 'bg-danger');
         console.log(err);
       }
     )
   }
   

   viewImg(prevImgPath){
    this.prevImgPath = prevImgPath;
        }

 

  ngOnInit() {
    this.getGallery();
  }

}
