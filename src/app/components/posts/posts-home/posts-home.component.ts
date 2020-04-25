import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.scss']
})
export class PostsHomeComponent implements OnInit {
blogs = [];
liked = null;
  constructor() {
    let blogs = [
      {
        id: '1',
      
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '../../../../assets/img/consult.jpg'
      },
      {
        id: '1',
      
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '../../../../assets/img/Aggital-2018-in-Review-13.jpg'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '../../../../assets/img/n-marley.jpg'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '../../../../assets/img/software-dev.jpg'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '../../../../assets/img/consult.jpg'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: ''
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '../../../../assets/img/finance.jpg'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: '../../../../assets/img/financial2.jpg'
      },
      {
        id: '1',
        name: 'Saint Zion',
        email: 'saintzion777@gmail.com',
        createdAt: Date.now(),
        photo: ''
      },
    
    ];

    this.blogs = blogs;
   }

   handleLike(index){
    this.liked = index;
   }

  ngOnInit() {
  }

}
