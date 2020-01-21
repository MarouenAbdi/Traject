import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router, private route: ActivatedRoute) { }

  private projectData: any;
  private data: string;
  testarr : any[] = [];
  interfaceid:string;

  ngOnInit()
  {
    document.getElementById('message').style.visibility = 'hidden';
    document.getElementById("message").classList.remove("mess");
    this.projectData = this.route.params.subscribe(params=> {this.data = params['id']});
    this._httpWebService.viewtasks(this.data)
    .subscribe(resp => {
      const userData = resp;
      this.testarr = userData.data.gettask;
    

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
addtask(){
  this.router.navigate(['/cpanel/addtsk',this.data]);
}

  }


