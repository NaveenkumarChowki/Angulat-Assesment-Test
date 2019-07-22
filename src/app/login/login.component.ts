import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id:string = "";
  pass:string = "";
  users:any = [];

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){
    http.get("https://api.myjson.com/bins/10moxn").subscribe(data => this.users = data);
  }

  ngOnInit() {
  }

  doLogin() {
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].id === this.id && this.users[i].passwd === this.pass) {
        //this.router.navigate(['dash']);
        
         this.router.navigate (['product']);
        alert("login sucess");
        return true;
      }
    }

    alert("Login failed");
    return false;
  }
}
