import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
// USER Obj
LOGGED_IN_USER = {
  id: null,
  firstname: null,
  lastname: null,
  email: null,
  user_type_id:  null,
  phone_number:  null,
  gender_id:  null,
  address:  null,
  status: null,
  activated:  null,
  profile_photo_url: 'user-female.svg',
  friends: [],
  friend_requests: [],
  country_id:  null,
  createdAt: null,
  updatedAt:  null,
  }

 

  USER = {
    id: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    phone_number:  null,
    gender_id:  null,
    address:  null,
    status: null,
    activated:  null,
    profile_photo_url: 'user-female.svg',
    friends: [],
    friend_requests: [],
    country_id:  null,
    createdAt: null,
    updatedAt:  null,
    }

  
    
  

userUrl = 'http://localhost:3600/api/no-whatsapp/v1';
// userUrl = 'https://saint-api.herokuapp.com/api/no-whatsapp/v1';


  constructor(private http: HttpClient, private router: Router) { }



  //SEND MAIL

  currentChatUser(id){
    this.USER.id = id;
  }
  // AUTHENTICATION
  register(user: any){
  return this.http.post<any>(`${this.userUrl}/user`, user);
  }

  login(user: any){
    return this.http.post<any>(`${this.userUrl}/user/login`, user);
  }

  profile(uid: any){
    return this.http.get<any>(`${this.userUrl}/user/${uid}`);
  }

  getUsers(){
    return this.http.get<any>(`${this.userUrl}/users`);
  }



    // ========================================//
// GALLERY 
// =========================================//
addImage( formData: any, appName: any, userId: any){
  // return this.http.post<any>(this.userUrl + '/user/uplaod/' + userInfo, formData);
  return this.http.post<any>(`${this.userUrl}/user/uplaod?appName=${appName}&userId=${userId}`, formData);
}

getGallery(userId: any){  
  return this.http.get<any>(this.userUrl + '/user/uplaod/' + userId);
  
}
  


}


