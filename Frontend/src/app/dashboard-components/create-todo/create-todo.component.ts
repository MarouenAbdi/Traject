import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }



tname: string;
description: string;
share: string;
deadline: string;
eventId: number;

d:any = new Date();
formattedDate:any = this.d.toISOString().substring(0, 10);
action:string;
details:string;
validate = true;
validate2=false;

  	validateSignUp(){

  		this.validate = true;


  		document.getElementById("tname").classList.remove("invalid-input");
  		document.getElementById("description").classList.remove("invalid-input");
        document.getElementById("share").classList.remove("invalid-input");
        document.getElementById("deadline").classList.remove("invalid-input");

  		


  		if(this.tname == null || this.tname == ""){
  			document.getElementById("tname").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your To-do Title and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
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
  		}
  		if(this.deadline == null || this.deadline == ""){
  			document.getElementById("deadline").classList.add("invalid-input");

  			this.action = "Oh snap!";
			this.details = "Enter your joining date and try submitting again."; 
  			document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
		  }
		  if(this.share == null || this.share == ""){
			document.getElementById("share").classList.add("invalid-input");
			
			this.action = "Oh snap!";
			this.details = "Provide an Email id and try submitting again."; 
			document.getElementById("message").classList.remove("alert-success");
			document.getElementById("message").classList.add("alert-danger");
			document.getElementById('message').style.visibility = 'visible';

			this.validate = false;
			}



  		if(this.validate){
             
        this.httpService.newEvent(this.tname,this.description,window.localStorage.getItem('user'),this.formattedDate,this.deadline);
        this.validate2=true;

        this.action = "Well done!";
        this.details = "You successfully registered team member."; 
        document.getElementById("message").classList.add("alert-success");
        document.getElementById("message").classList.remove("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
  			
		  }
		  
		if(this.validate2){
			this.httpService.getEvebytitle(this.tname)
			.subscribe(resp => {
				const userData = resp;
				this.eventId= userData.data.getEvents[0].Id;

				this.httpService.createuserevent(this.eventId,window.localStorage.getItem('id'));	

		});


		}
  	  	
  }

}
