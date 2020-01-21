import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';
import { format } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-ui',
  templateUrl: './add-ui.component.html',
  styleUrls: ['./add-ui.component.css']
})
export class AddUiComponent implements OnInit {

  constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router,private route: ActivatedRoute) { }

id: string;
type:string;
sense:string;
sourceSys:string;
targetSys:string;
startDate:string;
endDate:string;
estimatedDate:string;
actualDate:string;

sprintid:number;

private sprData: any;
private data: any;

action:string;
details:string;
validate= true;
test: any[] = [];


  ngOnInit() {

    this.sprData = this.route.params.subscribe(params=> {this.data = params['id']});
    this.sprintid = parseInt(this.data);
  
}


  validateSignUp(){
    this.validate = true;

  document.getElementById("id").classList.remove("invalid-input");
  document.getElementById("type").classList.remove("invalid-input");
  document.getElementById("sense").classList.remove("invalid-input");
  document.getElementById("targetSys").classList.remove("invalid-input");
  document.getElementById("startDate").classList.remove("invalid-input");
  document.getElementById("endDate").classList.remove("invalid-input");
  document.getElementById("estimatedDate").classList.remove("invalid-input");
  document.getElementById("actualDate").classList.remove("invalid-input");


  if(this.id == null || this.id == ""){
    document.getElementById("id").classList.add("invalid-input");
    
    this.action = "Oh snap!";
    this.details = "Enter a team name and try submitting again."; 
    document.getElementById("message").classList.remove("alert-success");
    document.getElementById("message").classList.add("alert-danger");
    document.getElementById('message').style.visibility = 'visible';

    this.validate = false;
      }

    if(this.type == null || this.type == ""){
    document.getElementById("type").classList.add("invalid-input");
    
    this.action = "Oh snap!";
    this.details = "Enter a team name and try submitting again."; 
    document.getElementById("message").classList.remove("alert-success");
    document.getElementById("message").classList.add("alert-danger");
    document.getElementById('message').style.visibility = 'visible';

    this.validate = false;
      }
      if(this.sense == null || this.sense == ""){
        document.getElementById("sense").classList.add("invalid-input");
        
        this.action = "Oh snap!";
        this.details = "Enter a team name and try submitting again."; 
        document.getElementById("message").classList.remove("alert-success");
        document.getElementById("message").classList.add("alert-danger");
        document.getElementById('message').style.visibility = 'visible';
    
        this.validate = false;
          }
          if(this.targetSys == null || this.targetSys == ""){
            document.getElementById("targetSys").classList.add("invalid-input");
            
            this.action = "Oh snap!";
            this.details = "Enter a team name and try submitting again."; 
            document.getElementById("message").classList.remove("alert-success");
            document.getElementById("message").classList.add("alert-danger");
            document.getElementById('message').style.visibility = 'visible';
        
            this.validate = false;
              }
    if(this.sourceSys == null || this.sourceSys== ""){
      document.getElementById("sourceSys").classList.add("invalid-input");

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

    this.httpService.createNewUi(this.id,this.type, this.sense, this.sourceSys,this.targetSys, this.startDate, this.endDate,this.actualDate,this.estimatedDate,this.sprintid);
             

          this.action = "Well done!";
          this.details = "You successfully registered a task."; 
          document.getElementById("message").classList.add("alert-success");
          document.getElementById("message").classList.remove("alert-danger");
          document.getElementById('message').style.visibility = 'visible';
          this.router.navigate(['cpanel/viewint',this.sprintid]);
             
            }
    

}

}

