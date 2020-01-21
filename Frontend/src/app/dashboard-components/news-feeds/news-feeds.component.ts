import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { UserAuthService } from '../../user-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit {

  errors:any;
  userid: string = window.localStorage.getItem('id');
  testarr : any[] = [];

  constructor(private _httpWebService: HttpWebApiService, private authService: HttpWebApiService, private router: Router) { }

  ngOnInit() {
  	document.getElementById('message').style.visibility = 'hidden';
    document.getElementById("message").classList.remove("mess");

    				this.authService.newsFeeds(this.userid)
    					.subscribe(res => {
    						const feeds = res;
								this.testarr= feeds.data.newsFeeds;
								
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

    this._httpWebService.updateFeeds(item.id);
    document.getElementById("notify_"+item.id).classList.add("notification-seen");
   
  }



}
