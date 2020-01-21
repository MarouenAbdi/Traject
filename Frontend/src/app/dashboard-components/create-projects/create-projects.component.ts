import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css']
})
export class CreateProjectsComponent {

constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }


projectid: string;
manager:string;
projectname: string;
client: string;
location: string;
startDate: string;
endDate: string;
estimatedDate: string;
actualDate: string;
test: any[] = [];
selectedetat:string;
action:string;
details:string;
validate = true;

ngOnInit() {

	this._httpWebService.pmlist("projectmanager")
.subscribe(resp => {
    const userl = resp;
    this.test = userl.data.pmList;
})
}

	semm(manager)
    {
     
	 this.selectedetat= manager.target.value;
	 console.log(this.selectedetat);
    }

  	validateSignUp(){

  		this.validate = true;

  		document.getElementById("projectid").classList.remove("invalid-input");
  		document.getElementById("projectname").classList.remove("invalid-input");
  		document.getElementById("client").classList.remove("invalid-input");
  		document.getElementById("location").classList.remove("invalid-input");
  		document.getElementById("manager").classList.remove("invalid-input");
  		document.getElementById("startDate").classList.remove("invalid-input");
  		document.getElementById("endDate").classList.remove("invalid-input");

  		if(this.projectid == null || this.projectid == ""){
  			document.getElementById("projectid").classList.add("invalid-input");
  			
  			this.action = "Oh snap!";
			  this.details = "Provide an Project Handle id and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';

  			this.validate = false;
  		}
  		if(this.projectname == null || this.projectname == ""){
  			document.getElementById("projectname").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your Project Title and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  		if(this.client == null || this.client == ""){
  			document.getElementById("client").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your Project client and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.location == null || this.location == ""){
  			document.getElementById("location").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your developer information and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}

  		if(this.selectedetat == null || this.selectedetat == ""){
  			document.getElementById("manager").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your Project Manager name and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
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




  		if(this.validate){

        this._httpWebService.validateProject(this.projectid)
          .subscribe(res => {
              const teamData = res;

              
              if(teamData.data.projectDetails[0] == null){
                this.httpService.newProject(this.projectid, this.projectname, this.client, this.selectedetat ,this.location, this.startDate, this.endDate,this.actualDate,this.estimatedDate);
               

                this.action = "Well done!";
                this.details = "You successfully registered Project."; 
                document.getElementById("message").classList.add("alert-success");
                document.getElementById("message").classList.remove("alert-danger");
				document.getElementById('message').style.visibility = 'visible';
				this.router.navigate(['cpanel/myprojects']);
               
              }else{
                if(teamData.data.projectDetails[0].projectId == this.projectid){
                  document.getElementById("projectid").classList.add("invalid-input");
                  this.action = "Oh snap!";
                  this.details = "Change your Project Handle it is already taken, and try submitting again."; 
                  
                  document.getElementById("message").classList.remove("alert-success");
                  document.getElementById("message").classList.add("alert-danger");
                  document.getElementById('message').style.visibility = 'visible';
                  
                  this.validate = false;
                }
               }

          });


  			
  		}
  	  	
  }

}