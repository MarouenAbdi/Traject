import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  errors:any;
  test : any[] = [];



  constructor(private _httpWebService: HttpWebApiService, private authService: HttpWebApiService, private router: Router) { }

  ngOnInit() {
    document.getElementById('message').style.visibility = 'hidden';
    document.getElementById('message').classList.remove("mess");


  	this._httpWebService.Userlisting()
        .subscribe(resp => {
        const userl = resp;
        this.test = userl.data.userList;

          if(this.test.length == 0){
            document.getElementById('message').classList.add("mess");
            document.getElementById('cardss').style.visibility = 'hidden';
            document.getElementById('message').style.visibility = 'visible';
          }
    		},
    		error => {
            this.errors = error;
            this.router.navigate(['forbidden']); 
        });
  }
}
