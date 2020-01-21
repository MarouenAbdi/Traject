import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



@Component({
  selector: 'app-create-bug-tickit',
  templateUrl: './create-bug-tickit.component.html',
  styleUrls: ['./create-bug-tickit.component.css']
})
export class CreateBugTickitComponent {

constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }


projectid: string;
tname: string;
description: string;
prior: string;


d:any = new Date();
formattedDate:any = this.d.toISOString().substring(0, 10);
action:string;
details:string;

validate = true;
testing: any[] = [];
selectedprj:string;


	ngOnInit(){

		this._httpWebService.projectlist()
		.subscribe(resp => {
			const prjl = resp;
			this.testing = prjl.data.projectList;
				
		})
	}

	prjcheck(projectid)
	{
		 
		 this.selectedprj= projectid.target.value;
	}

  	validateSignUp(){

  		this.validate = true;


  		document.getElementById("tname").classList.remove("invalid-input");
  		document.getElementById("description").classList.remove("invalid-input");
  		document.getElementById("projectid").classList.remove("invalid-input");
        document.getElementById("prior").classList.remove("invalid-input");
  		


  		if(this.selectedprj == null || this.selectedprj == ""){
  			document.getElementById("projectid").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Choose a Project and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  		if(this.tname == null || this.tname == ""){
  			document.getElementById("tname").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your To-do Title and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  		if(this.description == null || this.description == ""){
  			document.getElementById("description").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your to-do description and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}
  	
  	
      if(this.prior == null || this.prior == ""){
        document.getElementById("prior").classList.add("invalid-input");

        this.action = "Oh snap!";
      this.details = "Enter your joining date and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
        this.validate = false;
      }



  		if(this.validate){
			//newBug(title, description, rtype,status, bookedBy, bookedOn, resolvedBy, verificationStatus,verifiedBy,verifiedOn, projectId)
        this.httpService.newBug(this.tname,this.description,this.prior,"pending",window.localStorage.getItem('id'),this.formattedDate,"pending","pending","pending",this.formattedDate,this.selectedprj);
        
        this.action = "Well done!";
        this.details = "You successfully added a new bug."; 
        document.getElementById("message").classList.add("alert-success");
        document.getElementById("message").classList.remove("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
		this.router.navigate(['cpanel/bugs']);	
  		}
  	  	
  }

}
