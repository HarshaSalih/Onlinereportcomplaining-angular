import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  // name=""
  // address=""
  // phone=""
  // email=""
  // password=""
  // confirmpassword=""
  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    let data:any={"id":this.userId}
    
    this.api.viewProfile(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response;
      }
    )
  }
  data:any=[]



}