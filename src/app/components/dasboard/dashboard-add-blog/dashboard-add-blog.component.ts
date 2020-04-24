import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../../_dialogs/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-add-blog',
  templateUrl: './dashboard-add-blog.component.html',
  styleUrls: ['./dashboard-add-blog.component.scss']
})
export class DashboardAddBlogComponent implements OnInit {
blogForm;
formVal;
content;
name = 'Angular 9';
quillEditorRef;
maxUploadFileSize = 1000000;
imgUrl = '';
  constructor(public sharedService: SharedService, 
              private formBuilder: FormBuilder,
              private dialog:  MatDialog,
              private titleService: Title
              ) { 
    this.sharedService.activityInfo.name = 'Add new blog';
    this.sharedService.activityInfo.showArrowBack = true;

    // 
    this.blogForm = this.formBuilder.group({
      featuredImg: ['', ],
      title: ['', [Validators.required]],
      subTitle: ['', [Validators.required]],
      body: ['', [Validators.required]],
      tags: ['', [Validators.required]]
    })
      }



        //  Quill config
        quillConfig: any = {
    
        toolbar:[ 
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],                                         // remove formatting button
        ['link', 'image', 'video']]
        }

        // 
        fileChange(file){

        }

        // handle form submit
        blogFormSubmit(){
          if(this.blogForm.invalid){
            this.sharedService.openSnackBar('Please fill in the required feilds.', 'Ok', 11000, 'bg-dangerf');
          }else{
          let value = {
            featuredImg: this.blogForm.value.featuredImg,
            title: this.blogForm.value.title,
            subTitle: this.blogForm.value.subTitle,
            body: this.blogForm.value.body,
            tags: this.blogForm.value.tags,
          }
          this.formVal = value;
        }
        }

      

       onSelectionChanged(event){}

      //  Handle content change..
      onContentChanged(event){
      this.content = event.html;
      // console.log('The editor', event);
      }

    

      // Handling img upload...
    onEditorCreated(event: any) {
      this.quillEditorRef = event;
      // console.log(this.quillEditorRef);
      const toolbar = event.getModule('toolbar');
      toolbar.addHandler('image', this.imageHandler);
    }
     

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
              const range = this.quillEditorRef.getSelection();
              const img = '<img src="' + reader.result + '" />';
              this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
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


    // Open test dialog
    openConfirmDialog() {  
      let message = 'Are you sure you want to delete this?'
      const  dialogRef = this.dialog.open(DialogComponent, {  
        //  width: '400px', 
         data:{message: message},
      });
  
      dialogRef.afterClosed().subscribe(result => {
       if(result) {
        const range = this.quillEditorRef.getSelection();
        this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, result);
        this.sharedService.openSnackBar('Good', '', 4000, 'bg-success');
      }else{
        this.sharedService.openSnackBar('Bad', '', 4000, 'bg-danger');
      }
     });

     return false;
     }



       // Open test dialog
    uploadFeaturedImg() {
      const  dialogRef = this.dialog.open(DialogComponent, {
        width: '100%',
        maxWidth: '100vw'
      });
      dialogRef.afterClosed().subscribe(result => {
       if(result) {
        this.imgUrl = result;
        this.sharedService.openSnackBar('Good', '', 4000, 'bg-success');
      }else{
        this.sharedService.openSnackBar('Bad', '', 4000, 'bg-danger');
      }
     });

     return false;
     }



  

 

  // 
  onClick(){
    alert('Hey')
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

// https://github.com/surmon-china/ngx-quill-editor/issues/24


