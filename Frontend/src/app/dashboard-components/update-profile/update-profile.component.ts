import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit{

constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router) { }

id: any;
password: string;
confirm:string;
username:string;


phone: string;
address: string;
city: string;
state: string;
country: string;
zip: string;


d:any = new Date();
formattedDate:any = this.d.toISOString();
  
action:string;
details:string;
validate = true;
errors:any;




    ngOnInit(){

    }


  	validateSignUp(){

  		this.validate = true;

      document.getElementById("password").classList.remove("invalid-input");
      document.getElementById("cpassword").classList.remove("invalid-input");


  		

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
					this.action = "Please retype your password.";
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
  
  		if(this.validate){

        this._httpWebService.updatePassword(window.localStorage.getItem('user'), this.password)

        this.action = "Well done!";
        this.details = "You successfully updated your profile settings."; 
        document.getElementById("message").classList.add("alert-success");
        document.getElementById("message").classList.remove("alert-danger");
        document.getElementById('message').style.visibility = 'visible';

  		}
  	  	
  }

}