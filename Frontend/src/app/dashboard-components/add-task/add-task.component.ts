import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';
import { format } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router,private route: ActivatedRoute) { }

tasktype:string;
description:string;
status:string;
startDate:string;
endDate:string;
estimatedDate:string;
actualDate:string;
selectedetat:string;
interfaceid:string;

d:any = new Date();
formattedDate:any = this.d.toISOString().substring(0, 10);

private uiData: any;
private data: any;

titre:string ="Task assignment";
body:string = "You have a new task";
action:string;
details:string;
validate= true;
test: any[] = [];


  ngOnInit() {

    this.uiData = this.route.params.subscribe(params=> {this.data = params['id']});
    this.interfaceid=this.data;
    console.log(this.interfaceid);
      this._httpWebService.Userlisting()
        .subscribe(res => {
            const userData = res;
            this.test = userData.data.userList;

        });
  
}

  semm(consultant)
{
     
     this.selectedetat= consultant.target.value;
}

  validateSignUp(){
    this.validate = true;

  document.getElementById("tasktype").classList.remove("invalid-input");
  document.getElementById("description").classList.remove("invalid-input");
  document.getElementById("status").classList.remove("invalid-input");
  document.getElementById("startDate").classList.remove("invalid-input");
  document.getElementById("endDate").classList.remove("invalid-input");
  document.getElementById("estimatedDate").classList.remove("invalid-input");
  document.getElementById("actualDate").classList.remove("invalid-input");


    if(this.tasktype == null || this.tasktype == ""){
    document.getElementById("tasktype").classList.add("invalid-input");
    
    this.action = "Oh snap!";
    this.details = "Enter a team name and try submitting again."; 
    document.getElementById("message").classList.remove("alert-success");
    document.getElementById("message").classList.add("alert-danger");
    document.getElementById('message').style.visibility = 'visible';

    this.validate = false;
      }
      if(this.description == null || this.description == ""){
        document.getElementById("description").classList.add("invalid-input");
        
        this.action = "Oh snap!";
        this.details = "Enter a team name and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
    
        this.validate = false;
          }
          if(this.status == null || this.status == ""){
            document.getElementById("status").classList.add("invalid-input");
            
            this.action = "Oh snap!";
            this.details = "Enter a team name and try submitting again."; 
            document.getElementById("message").classList.remove("alert-success");
            document.getElementById("message").classList.add("alert-danger");
            document.getElementById('message').style.visibility = 'visible';
        
            this.validate = false;
              }
    if(this.selectedetat == null || this.selectedetat== ""){
      document.getElementById("selectedetat").classList.add("invalid-input");

      this.action = "Oh snap!";
    this.details = "Select your project and try submitting again."; 
      document.getElementById("message").classList.remove("alert-success");
      document.getElementById("message").classList.add("alert-danger");
      document.getElementById('message').style.visibility = 'visible';
      this.validate = false;
      this.validate = false;
    }
    if(this.startDate == null || this.startDate == ""){
      document.getElementById("startDate").classList.add("invalid-input");

      this.action = "Oh snap!";
    this.details = "Enter the project starting date and try submitting again."; 
      document.getElementById("message").classList.remove("alert-success");
      document.getElementById("message").classList.add("alert-danger");
      document.getElementById('message').style.visibility = 'visible';
      this.validate = false;
      this.validate = false;
    }
    if(this.endDate == null || this.endDate == ""){
      document.getElementById("endDate").classList.add("invalid-input");

      this.action = "Oh snap!";
    this.details = "Enter the project deadline and try submitting again."; 
      document.getElementById("message").classList.remove("alert-success");
      document.getElementById("message").classList.add("alert-danger");
      document.getElementById('message').style.visibility = 'visible';
      this.validate = false;
      this.validate = false;
    }
    if(this.estimatedDate == null || this.estimatedDate == ""){
      document.getElementById("estimatedDate").classList.add("invalid-input");

      this.action = "Oh snap!";
    this.details = "Enter the project deadline and try submitting again."; 
      document.getElementById("message").classList.remove("alert-success");
      document.getElementById("message").classList.add("alert-danger");
      document.getElementById('message').style.visibility = 'visible';
      this.validate = false;
      this.validate = false;
    }
    if(this.actualDate == null || this.actualDate == ""){
      document.getElementById("actualDate").classList.add("invalid-input");

      this.action = "Oh snap!";
    this.details = "Enter the project deadline and try submitting again."; 
      document.getElementById("message").classList.remove("alert-success");
      document.getElementById("message").classList.add("alert-danger");
      document.getElementById('message').style.visibility = 'visible';
      this.validate = false;
      this.validate = false;
    }


    if(this.validate){

              this.httpService.createNewTask(this.tasktype, this.description, this.selectedetat,this.status, this.startDate, this.endDate,this.actualDate,this.estimatedDate,this.interfaceid);
              this.httpService.createNews(this.formattedDate,this.titre,this.body,this.selectedetat)

              this.action = "Well done!";
              this.details = "You successfully registered a task."; 
              document.getElementById("message").classList.add("alert-success");
              document.getElementById("message").classList.remove("alert-danger");
              document.getElementById('message').style.visibility = 'visible';
              this.router.navigate(['cpanel/viewtask',this.data]);
             
            }
    

}

}

