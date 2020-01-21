import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-view-ui',
  templateUrl: './view-ui.component.html',
  styleUrls: ['./view-ui.component.css']
})
export class ViewUiComponent implements OnInit {

  constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router, private route: ActivatedRoute) { }

  private sprintData: any;
  private data: any;
  sprintid: number;
  testarr : any[] = [];

  ngOnInit()
  {
    document.getElementById('message').style.visibility = 'hidden';
    document.getElementById("message").classList.remove("mess");
    this.sprintData = this.route.params.subscribe(params=> {this.data = params['id']});
    this.sprintid = parseInt(this.data);

    this._httpWebService.viewint(this.sprintid)
    .subscribe(resp => {
      const userData = resp;
      this.testarr = userData.data.getInt;
    

    if(this.testarr.length == 0){
      document.getElementById("message").classList.add("mess");
              document.getElementById('requ').style.visibility = 'hidden';
              document.getElementById('message').style.visibility = 'visible';
          }
    },
    error =>{
      this.router.navigate(['forbidden']);
    });
}

tasks(item){
  this.router.navigate(['/cpanel/viewtask', item.Id]);
}

addui(){
  this.router.navigate(['/cpanel/addui',this.sprintid]);
}
  }
