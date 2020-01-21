import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent{

	username:string;
	password:string;
	confirm:string;
	userid:string;
	usertype:string;
	firstname:string;
	dob:string;
	selectedetat:string;

	action:string;
	details:string;
	validate = true;
	errors:any;
 
	constructor(private _httpWebService: HttpWebApiService, private router: Router) {}

	ngOnInit(){
	
	}

	semm(usertype)
	{
			 
			 this.selectedetat= usertype.target.value;
	}

  	validateSignUp(){

  	  	document.getElementById("username").classList.remove("invalid-input");
  	  	document.getElementById("password").classList.remove("invalid-input");
  	 	  document.getElementById("cpassword").classList.remove("invalid-input");
  	  	document.getElementById("userid").classList.remove("invalid-input");
  	  	document.getElementById("usertype").classList.remove("invalid-input");
      	document.getElementById("firstname").classList.remove("invalid-input");
				document.getElementById("dob").classList.remove("invalid-input");



      
      if(this.username == null || this.username == ""){
  			document.getElementById("username").classList.add("invalid-input");
				this.action = "Oh snap! Provide an Email id and try submitting again."; 
				document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  	  else{
  	  	if(EMAIL_REGEX.test(this.username))
  			this.validate = true;
  		
  		else{
  			document.getElementById("username").classList.add("invalid-input");
				this.action = "Oh snap! Change your email id and try submitting again.";
				document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
  			this.validate = false;
  		}
  	  }
  		
  	  console.log(this.username);
  		
  		if(this.password == null || this.password == ""){
        document.getElementById("password").classList.add("invalid-input");
				this.action = "Enter a Valid password.";
				document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      	}else{
          if(this.confirm == null || this.confirm == ""){
          document.getElementById("cpassword").classList.add("invalid-input");
					this.action = "Enter a Valid password.";
					document.getElementById("message").classList.remove("alert-success");
					document.getElementById("message").classList.add("alert-danger");
					document.getElementById('message').style.visibility = 'visible';
          this.validate = false;
          }else{
            if(this.password != this.confirm){
              document.getElementById("password").classList.add("invalid-input");
              document.getElementById("cpassword").classList.add("invalid-input");
							this.action = "The passwords do not match.";
							document.getElementById("message").classList.remove("alert-success");
							document.getElementById("message").classList.add("alert-danger");
							document.getElementById('message').style.visibility = 'visible';
              this.validate = false;
            }
          }
      }


   	  if(this.firstname == null || this.firstname == ""){
  		  document.getElementById("firstname").classList.add("invalid-input");

			this.action = "Oh snap! Enter your first name and try submitting again.";
			document.getElementById("message").classList.remove("alert-success");
			document.getElementById("message").classList.add("alert-danger");
			document.getElementById('message').style.visibility = 'visible';
  		this.validate = false;
  	  }
        if(this.dob == null || this.dob == ""){
        document.getElementById("dob").classList.add("invalid-input");
				this.action = "Oh snap! Enter your date of joining and try submitting again.";
				document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      }
 

      if(this.userid == null || this.userid == ""){
        document.getElementById("userid").classList.add("invalid-input");
				this.action = "Oh snap! Enter your userid and try submitting again.";
				document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
      }
      if(this.selectedetat == null || this.selectedetat == ""){
        document.getElementById("usertype").classList.add("invalid-input");
				this.action = "Oh snap! Enter your usertype and try submitting again.";
				document.getElementById("message").classList.remove("alert-success");
  			document.getElementById("message").classList.add("alert-danger");
  			document.getElementById('message').style.visibility = 'visible';
        this.validate = false;
			}
				


  	if(this.validate){
    
			this._httpWebService.createNewUser(this.userid, this.username, this.password, this.firstname, this.dob, this.selectedetat);
	
			this.action = "Well done!";
			this.details = "You successfully registered a new user."; 
			document.getElementById("message").classList.add("alert-success");
			document.getElementById("message").classList.remove("alert-danger");
			document.getElementById('message').style.visibility = 'visible';
			this.router.navigate(['cpanel']);
      
	}
  }
}
