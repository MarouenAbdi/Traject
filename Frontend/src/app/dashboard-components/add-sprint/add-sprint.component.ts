import { Component, OnInit } from '@angular/core';
import { HttpWebApiService } from '../../http-web-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Validators } from '@angular/forms';
import { format } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.css']
})
export class AddSprintComponent implements OnInit {

  constructor(private _httpWebService: HttpWebApiService, private httpService: HttpWebApiService, private router: Router,private route: ActivatedRoute) { }

  sprintnbr: string;
  sprintnumber:number;
  startDate:string;
  endDate:string;
  estimatedDate:string;
  actualDate:string;
  
  
  private sprData: any;
  private data: any;
  
  action:string;
  details:string;
  validate= true;
  test: any[] = [];
  
  
    ngOnInit() {
  
      this.sprData = this.route.params.subscribe(params=> {this.data = params['id']});
    
  }
  
  
    validateSignUp(){
      this.validate = true;
  
    document.getElementById("sprintnbr").classList.remove("invalid-input");
    document.getElementById("startDate").classList.remove("invalid-input");
    document.getElementById("endDate").classList.remove("invalid-input");
    document.getElementById("estimatedDate").classList.remove("invalid-input");
    document.getElementById("actualDate").classList.remove("invalid-input");
  
  
    if(this.sprintnbr == null || this.sprintnbr == ""){
      document.getElementById("sprintnbr").classList.add("invalid-input");
      
      this.action = "Oh snap!";
      this.details = "Enter a team name and try submitting again."; 
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
        this.sprintnumber = parseInt(this.sprintnbr); 
  
      this.httpService.createNewspr(this.sprintnumber, this.startDate, this.endDate,this.actualDate,this.estimatedDate,this.data);
               
  
            this.action = "Well done!";
            this.details = "You successfully registered a task."; 
            document.getElementById("message").classList.add("alert-success");
            document.getElementById("message").classList.remove("alert-danger");
            document.getElementById('message').style.visibility = 'visible';
            this.router.navigate(['cpanel/viewspr',this.data]);
               
              }
      
  
  }
  
  }
  
  