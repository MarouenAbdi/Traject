import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
  errors:any;
  userid: string;
  body:string;


  
  eventList: any[] =[];
  testarr : any[] = [];

  constructor(private _httpWebService: HttpWebApiService, private authService: HttpWebApiService, private router: Router) { }

  ngOnInit() {
  	document.getElementById('message').style.visibility = 'hidden';
	document.getElementById("message").classList.remove("mess");

	
	

  			this._httpWebService.getuserevent(window.localStorage.getItem('id'))
    		.subscribe(resp => {
    			const userData = resp;
    			this.eventList = userData.data.getUserevent;

				if(this.eventList.length == 0){
            		document.getElementById("message").classList.add("mess");
    				document.getElementById('requ').style.visibility = 'hidden';
    				document.getElementById('message').style.visibility = 'visible';
				}
				else
    			
    			for (var i = this.eventList.length - 1; i >= 0; i--) {
    				

    				this.authService.getEve(this.eventList[i].eventId)
    					.subscribe(res => {
							const feeds = res;
							for (var i = feeds.data.getEvents.length - 1; i >= 0; i--) {
    						this.testarr.push(feeds.data.getEvents[i]);}
							
    					},
				    		error => {
				            this.errors = error;
				            this.router.navigate(['forbidden']);
    					});
    			}
    			
					


    		},
    );




}

}