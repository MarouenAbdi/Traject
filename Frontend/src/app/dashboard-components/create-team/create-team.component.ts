import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';
import { format } from 'util';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit{


projectid:string;
doj:string;
tn:string;
selectedprj:string;
d:any = new Date();
formattedDate:any = this.d.toISOString().substring(0, 10);
action:string;
details:string;
validate= true;
testing: any[] = [];

constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }
  	
    ngOnInit(){
	  this.doj = this.formattedDate; 


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

		document.getElementById("tn").classList.remove("invalid-input");
		document.getElementById("projectid").classList.remove("invalid-input");
		document.getElementById("doj").classList.remove("invalid-input");
	

		  if(this.tn == null || this.tn == ""){
			document.getElementById("tn").classList.add("invalid-input");
			
			this.action = "Oh snap!";
			this.details = "Enter a team name and try submitting again."; 
			document.getElementById("message").classList.remove("alert-success");
			document.getElementById("message").classList.add("alert-danger");
			document.getElementById('message').style.visibility = 'visible';

			this.validate = false;
	  		}
  		if(this.selectedprj == null || this.selectedprj== ""){
  			document.getElementById("projectid").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Select your project and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  			this.validate = false;
  		}

  		if(this.validate){

      

              
             
                this.httpService.createNewTeam(this.tn,this.doj,this.selectedprj);

                this.action = "Well done!";
                this.details = "You successfully created a team ."; 
                document.getElementById("message").classList.add("alert-success");
                document.getElementById("message").classList.remove("alert-danger");
				document.getElementById('message').style.visibility = 'visible';
				this.router.navigate(['cpanel/myteams']);
               
              

          };


  			
  		
  	  	
  }

}
