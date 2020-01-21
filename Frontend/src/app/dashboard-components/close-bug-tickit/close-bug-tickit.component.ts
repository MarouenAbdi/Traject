import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-close-bug-tickit',
  templateUrl: './close-bug-tickit.component.html',
  styleUrls: ['./close-bug-tickit.component.css']
})
export class CloseBugTickitComponent implements OnInit {


  errors:any;
  userid: string = window.localStorage.getItem('user');
  body:string;

  waitingBug

  d:any = new Date();
  formattedDate:any = this.d.toISOString();
  projectList: any[] =[];
  testarr : any[] = [];

  constructor(private _httpWebService: HttpWebApiService, private authService: HttpWebApiService, private router: Router) { }

  ngOnInit() {
  	document.getElementById('message').style.visibility = 'hidden';
    document.getElementById("message").classList.remove("mess");

	this._httpWebService.waitingBug("waiting",window.localStorage.getItem('id'))
	.subscribe(resp => {
		const userData = resp;
			this.testarr = userData.data.getbugswaiting;

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

  acceptRequest(item){
    this._httpWebService.closeBugReport(item.Id,"resolved", window.localStorage.getItem('id'));
  }

}