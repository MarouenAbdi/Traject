import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class HttpWebApiService {



  constructor(private _Http: Http) { }

  getSignInConfirmation(username, password){
  	return this._Http.get('http://localhost:4000/graphql?query={signInAuth(email: \"'+ username +'\", password: \"'+ password +'\"){ Id email password firstName userType} }')
  		.map((res:Response) => res.json());

  }


  createNewUser(userId, email, password, firstName, dob, userType){

  	const newUser = "http://localhost:4000/graphql?query=mutation{signUpUser(Id: \""+userId+"\",email: \""+email+"\",password: \""+password+"\", firstName: \""+firstName+"\", dob: \""+dob+"\", userType: \""+userType+"\"){Id}}";
  	const reqBody = "";
  	
    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  verifyUserInfo(username){
    const userData = this._Http.get('http://localhost:4000/graphql?query={forgotPassword(email: \"'+ username +'\"){ email } }')
      .map((res:Response) => res.json());
 
      return userData;
  }

  pmlist(userType){
    const userLis = this._Http.get('http://localhost:4000/graphql?query={pmList(userType: \"'+userType+'\"){ Id firstName }}')
      .map((res:Response) => res.json());
 
      return userLis;
  }


  Userlisting(){
    const userLis = this._Http.get('http://localhost:4000/graphql?query={userList{ Id firstName email userType dob  }}')
      .map((res:Response) => res.json());
 
      return userLis;
  }

  projectlist(){
      return this._Http.get('http://localhost:4000/graphql?query={projectList{ Id  name  client  projectmanager  location  startDate  endDate  actualDuration estimatedDuration}}')
      .map((res:Response) => res.json());;
  }
 

  verifyDualLogin(username){
    const dualData = this._Http.get('http://localhost:4000/graphql?query={signInAuth(email: \"'+ username +'\"){ userType } }')
      .map((res:Response) => res.json());

    return dualData;
  }


  createNewTeam(teamName,doj,projectid){
    const newUser = "http://localhost:4000/graphql?query=mutation { createTeam(teamName: \""+teamName+"\", creationDate: \""+doj+"\",projectId: \""+projectid+"\") { Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  allTeams(){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={allTeam{ Id teamName creationDate projectId}}')
      .map((res:Response) => res.json());

     return teamData;
  }

  myTeams(userid){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={teamDetails(userId: \"'+userid+'\", status: "joined"){teamId projectId joiningDate} }')
      .map((res:Response) => res.json());

     return teamData;
  }


  validateTeamRegistration(teamid){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={teamDetails(Id: \"'+teamid+'\"){Id} }')
      .map((res:Response) => res.json());

     return teamData;
  }


  sendRequest(sender, receiver, projectId, teamId, status){
    const newUser = "http://localhost:4000/graphql?query=mutation { createRequest(senderUserId: \""+sender+"\", receiverUserId: \""+receiver+"\", projectId: \""+projectId+"\",teamId: \""+teamId+"\", status: \""+status+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  getRequests(receiver){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={myRequests(receiverUserId: "'+receiver+'", status: \"pending\") {id senderUserId receiverUserId projectId teamId } }')
      .map((res:Response) => res.json());

     return teamData;
  }


  updateRequest(id, status){
    const newUser = "http://localhost:4000/graphql?query=mutation{requestResponse(id:"+id+", status: \""+status+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();

  }


  createNews(timest, title, body,userId){
    const newUser = "http://localhost:4000/graphql?query=mutation{createFeed( sTimestamp: \""+timest+"\", title: \""+title+"\", body: \""+body+"\", userId: \""+userId+"\") { Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  updateFeeds(id){
    const newUser = "http://localhost:4000/graphql?query=mutation{feedsResponse(id:"+id+", status: \"read\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  newsFeeds(userid){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={newsFeeds(userId: \"'+userid+'\"){Id sTimestamp title body} }')
      .map((res:Response) => res.json());

     return teamData;
  }




  myProjects(userid){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={teamDetails(){projectId} }')
      .map((res:Response) => res.json());

     return teamData;
  }


  deleteTeamRequest(teamid, userid, projectid){
    const newUser = "http://localhost:4000/graphql?query=mutation{deleteTeamJoin(teamId: \""+teamid+"\", userId: \""+userid+"\", projectId: \""+projectid+"\"){ id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  userInfo(username){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={profile(email: \"'+username+'\"){Id email firstName dob userType } }')
      .map((res:Response) => res.json());

     return teamData;
  }


  newProject(projectId, name, client, projectManager, location, startDate, endDate, actDate, estDate){
    const newUser = "http://localhost:4000/graphql?query=mutation{ createProject(Id: \""+projectId+"\", name: \""+name+"\", client: \""+client+"\", projectmanager: \""+projectManager+"\", location: \""+location+"\", startDate: \""+startDate+"\", endDate: \""+endDate+"\", actualDuration: \""+actDate+"\",estimatedDuration: \""+estDate+"\"){ Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }

  validateProject(projectId){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{ projectDetails(Id: \"'+projectId+'\"){ Id } }')
      .map((res:Response) => res.json());

     return teamData;
  }


  projectInfo(projectId){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{ projectDetails(Id: \"'+projectId+'\"){Id name client projectmanager location startDate endDate actualDuration estimatedDuration } }')
      .map((res:Response) => res.json());

     return teamData;  
  }


  updateProject(pid, projectId, name, description, company, budget, manager, startDate, endDate){
    const newUser = "http://localhost:4000/graphql?query=mutation{ updateProjectSettings(id: "+pid+", projectId: \""+projectId+"\" name: \""+name+"\" description: \""+description+"\" company: \""+company+"\" budget: "+budget+" manager: \""+manager+"\" startDate: \""+startDate+"\" endDate: \""+endDate+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  updateProjectStatus(pid, projectId, status){
    const newUser = "http://localhost:4000/graphql?query=mutation{ updateProjectStatus(id: "+pid+", projectId: \""+projectId+"\" status: \""+status+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();  
  }


  updateProjectCompl(pid, projectId, completion){
    const newUser = "http://localhost:4000/graphql?query=mutation{ updateProjectCompletion(id: "+pid+", projectId: \""+projectId+"\" percentCompletion: "+completion+") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  newEvent(title,description,createdBy,createDate,deadline){
    const newUser = "http://localhost:4000/graphql?query=mutation{createevent(title: \""+title+"\", description: \""+description+"\", createdBy: \""+createdBy+"\", createDate: \""+createDate+"\", deadline: \""+deadline+"\"){ Id } }";
    const reqBody = "";

    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }

  createuserevent(eventId,userId){
    const newUser =('http://localhost:4000/graphql?query=mutation{setuserevent(eventId: "'+eventId+'",userId: "'+userId+'"){eventId userId} }')
    const reqBody = "";

    const req = this._Http.post(newUser, reqBody);
    req.subscribe();  
  } 

   getEve(Id){
    const eventData =this._Http.get('http://localhost:4000/graphql?query=query{getEvents(Id: "'+Id+'" ){Id title description deadline createdBy createDate} }')
      .map((res:Response) => res.json());

     return eventData;  
  } 

  getEvebytitle(title){
    const eventData =this._Http.get('http://localhost:4000/graphql?query=query{getEvents(title: "'+title+'" ){Id title description deadline createdBy createDate} }')
      .map((res:Response) => res.json());

     return eventData;  
  } 


  

  getuserevent(Id){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{getUserevent(userId: "'+Id+'"){ eventId }}')
      .map((res:Response) => res.json());

     return teamData;  
  }


  updateTodos(todoid, userid, resdate){
    const newUser = "http://localhost:4000/graphql?query=mutation{todoResponse(id: "+todoid+", status: \"resolved\", resolvedBy: \""+userid+"\", resolvedOn: \""+resdate+"\"){ id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }

  newBug(title, description, rtype,status, bookedBy, bookedOn, resolvedBy, verificationStatus,verifiedBy,verifiedOn, projectId){
    const newUser = "http://localhost:4000/graphql?query=mutation{createbugs(title: \""+title+"\",description: \""+description+"\",type: \""+rtype+"\",status: \""+status+"\",bookedBy: \""+bookedBy+"\",bookedOn: \""+bookedOn+"\",resolvedBy: \""+resolvedBy+"\",verificationStatus:\""+verificationStatus+"\",verifiedBy: \""+verifiedBy+"\",verifiedOn: \""+bookedOn+"\",projectId: \""+projectId+"\") { Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  respondtoBugs(Id,status,verifiedBy,verifiedOn){
    const newUser = "http://localhost:4000/graphql?query=mutation{bugsResponse(Id: "+Id+", status: \""+status+"\", verifiedBy: \""+verifiedBy+"\", verifiedOn: \""+verifiedOn+"\") { Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  closeBugReport(id,status,resolvedBy){
    const newUser = "http://localhost:4000/graphql?query=mutation{bugsClose(Id: "+id+", status: \""+status+"\", resolvedBy: \""+resolvedBy+"\") { Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  viewBug(state){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{getbugs(status: "'+state+'"){ Id title description status type bookedBy bookedOn resolvedBy verificationStatus verifiedBy verifiedOn projectId } }')
      .map((res:Response) => res.json());

     return teamData; 
  }


  waitingBug(status, bookedBy){
    const teamData = this._Http.get('http://localhost:4000/graphql?query=query{getbugswaiting(status: "'+status+'", bookedBy: "'+bookedBy+'" ){Id title description status type bookedBy bookedOn resolvedBy verificationStatus verifiedBy verifiedOn projectId} }')
      .map((res:Response) => res.json());

     return teamData; 
  }


  updateProfile(id, email, firstName, lastName, dob, phoneNumber, company, department, address, city, state, country, zip){
    const newUser = "http://localhost:4000/graphql?query=mutation{profileUpdate(id:"+id+" ,email: \""+email+"\", firstName: \""+firstName+"\", lastName: \""+lastName+"\", dob: \""+dob+"\", phoneNumber: \""+phoneNumber+"\", company: \""+company+"\", department: \""+department+"\",  address: \""+address+"\", city: \""+city+"\", state: \""+state+"\", country: \""+country+"\", zip: \""+zip+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  updatePassword(email, password){
    const newUser = "http://localhost:4000/graphql?query=mutation{passwordUpdate(email: \""+email+"\", password: \""+password+"\"){ Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  updateTeam(teamid, status){
    const newUser = "http://localhost:4000/graphql?query=mutation{updateTeam(teamId: \""+teamid+"\", status: \""+status+"\") { id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }


  teamsData(teamid){
    const teamData = this._Http.get('http://localhost:4000/graphql?query={teamDetails(teamId: \"'+teamid+'\", status: "joined"){ teamId projectId } }')
      .map((res:Response) => res.json());

     return teamData;
  }

  


  viewsprints(projectid){
    const sprintData = this._Http.get('http://localhost:4000/graphql?query={getSprints(projectId: \"'+projectid+'\"){ Id sprintNumber startDate endDate estimatedDuration actualDuration projectId } }')
      .map((res:Response) => res.json());

     return sprintData;
  }

  

  viewint(sprintid){
    const sprintData = this._Http.get('http://localhost:4000/graphql?query={getInt(sprintId: '+sprintid+'){ Id type sense sourceSys targetSys startDate endDate estimatedDuration actualDuration sprintId } }')
      .map((res:Response) => res.json());

     return sprintData;
  }

  viewtasks(interfaceid){
    const sprintData = this._Http.get('http://localhost:4000/graphql?query={gettask(interfaceId: \"'+interfaceid+'\"){ Id taskType description consultant status startDate endDate estimatedDuration actualDuration interfaceId } }')
      .map((res:Response) => res.json());

     return sprintData;
  }

  createNewTask(tasktype,description,consultant,status,startDate,endDate,estimatedDuration,actualDuration,interfaceId){
    const newUser = "http://localhost:4000/graphql?query=mutation { createtask(taskType: \""+tasktype+"\", description: \""+description+"\",consultant: \""+consultant+"\",status: \""+status+"\",startDate: \""+startDate+"\",endDate: \""+endDate+"\",estimatedDuration: \""+estimatedDuration+"\",actualDuration: \""+actualDuration+"\",interfaceId: \""+interfaceId+"\") { Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }

  createNewUi(Id,sense,type,sourceSys,targetSys,startDate,endDate,estimatedDuration,actualDuration,sprintId){
    const newUser = "http://localhost:4000/graphql?query=mutation { createui(Id: \""+Id+"\", type: \""+type+"\",sense: \""+sense+"\",sourceSys: \""+sourceSys+"\",targetSys: \""+targetSys+"\",startDate: \""+startDate+"\",endDate: \""+endDate+"\",estimatedDuration: \""+estimatedDuration+"\",actualDuration: \""+actualDuration+"\",sprintId: "+sprintId+") { Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }

  createNewspr(sprintNumber,startDate,endDate,estimatedDuration,actualDuration,projectId){
    const newUser = "http://localhost:4000/graphql?query=mutation { createspr(sprintNumber: "+sprintNumber+" ,startDate: \""+startDate+"\",endDate: \""+endDate+"\",estimatedDuration: \""+estimatedDuration+"\",actualDuration: \""+actualDuration+"\",projectId: \""+projectId+"\") { Id } }";
    const reqBody = "";


    const req = this._Http.post(newUser, reqBody);
    req.subscribe();
  }



}


