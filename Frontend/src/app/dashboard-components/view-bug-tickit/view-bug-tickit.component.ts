import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-view-bug-tickit',
  templateUrl: './view-bug-tickit.component.html',
  styleUrls: ['./view-bug-tickit.component.css']
})
export class ViewBugTickitComponent implements OnInit {
	

  errors:any;
  userid: string = window.localStorage.getItem('user');
  body:string = "Hello, it's me..";
	project:string;
	d:any = new Date();
  formattedDate:any = this.d.toISOString().substring(0, 10);

  testarr : any[] = [];

  constructor(private _httpWebService: HttpWebApiService, private authService: HttpWebApiService, private router: Router) { }

  ngOnInit() {
  	document.getElementById('message').style.visibility = 'hidden';
    document.getElementById("message").classList.remove("mess");

  	this._httpWebService.viewBug("pending")
    		.subscribe(resp => {
    			const userData = resp;
					this.testarr = userData.data.getbugs;

					
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
    this._httpWebService.respondtoBugs(item.Id,"waiting",window.localStorage.getItem('user'),this.formattedDate);
  }


}