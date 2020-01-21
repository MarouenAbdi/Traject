import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  errors:any;
  userid: string = window.localStorage.getItem('user');
  body:string;

  d:any = new Date();
  formattedDate:any = this.d.toISOString();


  testarr : any[] = [];

  constructor(private _httpWebService: HttpWebApiService, private authService: HttpWebApiService, private router: Router) { }

  ngOnInit() {
  	document.getElementById('message').style.visibility = 'hidden';
    document.getElementById("message").classList.remove("mess");

    this._httpWebService.projectlist()
    .subscribe(resp => {
        const userData = resp;
        this.testarr = userData.data.projectList;
        
        if(this.testarr.length == 0){
    document.getElementById("message").classList.add("mess");
            document.getElementById('requ').style.visibility = 'hidden';
            document.getElementById('message').style.visibility = 'visible';
        }
    
    
    },
    error => {
    this.errors = error;
    this.router.navigate(['forbidden']); 
    });
    
    }


  sprints(item){
     this.router.navigate(['/cpanel/viewspr', item.Id]);
  }


  updateRequest(item){
     this.router.navigate(['/cpanel/updatestatus', item.Id]);
  }




}