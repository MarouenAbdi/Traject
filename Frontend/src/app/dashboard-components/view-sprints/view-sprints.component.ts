import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-view-sprints',
  templateUrl: './view-sprints.component.html',
  styleUrls: ['./view-sprints.component.css']
})
export class ViewSprintsComponent implements OnInit {

  constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router, private route: ActivatedRoute) { }

  private projectData: any;
  private data: string;
  testarr : any[] = [];

  ngOnInit()
  {
    document.getElementById('message').style.visibility = 'hidden';
    document.getElementById("message").classList.remove("mess");
    this.projectData = this.route.params.subscribe(params=> {this.data = params['id']});

    this._httpWebService.viewsprints(this.data)
    .subscribe(resp => {
      const userData = resp;
      this.testarr = userData.data.getSprints;
    

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


interfaces(item){
  this.router.navigate(['/cpanel/viewint', item.Id]);
}

addspr(){

  this.router.navigate(['/cpanel/addspr', this.data]);

}


  }


