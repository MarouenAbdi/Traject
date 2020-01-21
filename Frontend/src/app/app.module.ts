import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaModule } from 'ng-recaptcha';
// Parent Components

import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';

import { SigncomponentComponent } from './signcomponent/signcomponent.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';


import { SignupFormComponent } from './signup-form/signup-form.component';

import { ErrorComponentComponent } from './error-component/error-component.component';

import { PasswordChangeComponent } from './password-change/password-change.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { UserHamburgerComponent } from './user-hamburger/user-hamburger.component';

// Dashboard components

import { CreateProjectsComponent } from './dashboard-components/create-projects/create-projects.component';
import { ViewProjectsComponent } from './dashboard-components/view-projects/view-projects.component';
import { UpdateProjectSettComponent } from './dashboard-components/update-project-sett/update-project-sett.component';
import { UserprojectsComponent } from './dashboard-components/userprojects/userprojects.component';
import { ViewSprintsComponent } from './dashboard-components/view-sprints/view-sprints.component';
import { ViewUiComponent } from './dashboard-components/view-ui/view-ui.component';
import { ViewTasksComponent } from './dashboard-components/view-tasks/view-tasks.component';

import { ProfileViewComponent } from './dashboard-components/profile-view/profile-view.component';
import { UpdateProfileComponent } from './dashboard-components/update-profile/update-profile.component';

import { CreateTeamComponent } from './dashboard-components/create-team/create-team.component';
import { ViewTeamComponent } from './dashboard-components/view-team/view-team.component';
import { TeammembersComponent } from './dashboard-components/teammembers/teammembers.component'; 
import { UserTeamsComponent } from './dashboard-components/user-teams/user-teams.component';
import { ViewusersComponent } from './dashboard-components/viewusers/viewusers.component';
import { ViewBugTickitComponent } from './dashboard-components/view-bug-tickit/view-bug-tickit.component';
import { CreateBugTickitComponent } from './dashboard-components/create-bug-tickit/create-bug-tickit.component';
import { CloseBugTickitComponent } from './dashboard-components/close-bug-tickit/close-bug-tickit.component';


import { ViewTodoComponent } from './dashboard-components/view-todo/view-todo.component';
import { CreateTodoComponent } from './dashboard-components/create-todo/create-todo.component';


import { NewsFeedsComponent } from './dashboard-components/news-feeds/news-feeds.component';




//services and Guards

import { HttpWebApiService } from './http-web-api.service';
import { UserAuthService } from './user-auth.service';
import { AuthGuard } from './auth.guard';
import { AdminAuthGuard } from './admin-auth.guard';
import { PasswordGuard } from './password.guard';
import { combineAll } from 'rxjs/operator/combineAll';
import { AddSprintComponent } from './dashboard-components/add-sprint/add-sprint.component';
import { AddUiComponent } from './dashboard-components/add-ui/add-ui.component';
import { AddTaskComponent } from './dashboard-components/add-task/add-task.component';
import { PmDashboardComponent } from './pm-dashboard/pm-dashboard.component';
import { PmHamburgerComponent } from './pm-hamburger/pm-hamburger.component';










const appRoutes:Routes = [
  {  path: '',  component: GetStartedComponent  },

  {  path: 'updatePassword/:id', canActivate: [PasswordGuard], component: PasswordChangeComponent },
  {  path: 'forbidden', component: ErrorComponentComponent },
  {  path: 'loading', canActivate: [AuthGuard], component: LoadingPageComponent },
  {  path: 'dashboard',  
     canActivate: [AuthGuard],  
     component: UserDashboardComponent, 
     children: [
       {
         path: '',
         component: MainPageComponent
       },
       {
         path: 'profile',
         component: ProfileViewComponent
       },
       {
         path: 'userteams',
         component: UserTeamsComponent
       },
       {
         path: 'newsfeeds',
         component: NewsFeedsComponent
       },
       {
         path: 'myprojects',
         component: UserprojectsComponent
       }, 
       {
         path: 'createtodo',
         component: CreateTodoComponent
       },
       {
         path: 'mytodos',
         component: ViewTodoComponent
       },
       {
         path: 'newbugreport',
         component: CreateBugTickitComponent
       },
       {
         path: 'bugs',
         component: ViewBugTickitComponent
       },
       {
         path: 'accountsettings',
         component: UpdateProfileComponent
       }
     ]
  },
  

  {  path: 'pmpanel',  
  canActivate: [AdminAuthGuard],  
  component: PmDashboardComponent, 
  children: [
    {
      path: '',
      component: MainPageComponent
    },
    {
      path: 'profile',
      component: ProfileViewComponent
    },
    {
      path: 'createteam',
      component: CreateTeamComponent
    },
    {
      path: 'myteams',
      component: ViewTeamComponent
    },
    {
      path: 'newsfeeds',
      component: NewsFeedsComponent
    },
    {
      path: 'myprojects',
      component: ViewProjectsComponent
    },
    {
      path: 'changesettings/:id',
      component: UpdateProjectSettComponent
    },
    {
      path: 'createtodo',
      component: CreateTodoComponent
    },
    {
      path: 'mytodos',
      component: ViewTodoComponent
    },
    {
      path: 'newbugreport',
      component: CreateBugTickitComponent
    },
    {
      path: 'bugs',
      component: ViewBugTickitComponent
    },
    {
      path: 'verifybugs',
      component: CloseBugTickitComponent
    },
    {
      path: 'accountsettings',
      component: UpdateProfileComponent
    },
    {
      path: 'addteammembers/:id',
      component: TeammembersComponent
    },
   {
     path: 'viewspr/:id',
     component: ViewSprintsComponent

   },
   {
     path: 'viewint/:id',
     component: ViewUiComponent

   },
   {
     path: 'viewtask/:id',
     component: ViewTasksComponent

   },
   {
     path: 'addui/:id',
     component: AddUiComponent

   },
   {
     path: 'addtsk/:id',
     component: AddTaskComponent

   },
   {
    path:'addspr/:id',
    component: AddSprintComponent
  }
  ]
},


  {  path: 'cpanel',  
     canActivate: [AdminAuthGuard],  
     component: AdminDashboardComponent, 
     children: [
       {
         path: '',
         component: MainPageComponent
       },
       {
         path: 'profile',
         component: ProfileViewComponent
       },
       {
         path: 'createteam',
         component: CreateTeamComponent
       },
       {
         path: 'myteams',
         component: ViewTeamComponent
       },
       {
         path: 'newsfeeds',
         component: NewsFeedsComponent
       },
       {
         path: 'newproject',
         component: CreateProjectsComponent
       },
       {
         path: 'myprojects',
         component: ViewProjectsComponent
       },
       {
         path: 'changesettings/:id',
         component: UpdateProjectSettComponent
       },
       {
         path: 'createtodo',
         component: CreateTodoComponent
       },
       {
         path: 'mytodos',
         component: ViewTodoComponent
       },
       {
         path: 'newbugreport',
         component: CreateBugTickitComponent
       },
       {
         path: 'bugs',
         component: ViewBugTickitComponent
       },
       {
         path: 'verifybugs',
         component: CloseBugTickitComponent
       },
       {
         path: 'accountsettings',
         component: UpdateProfileComponent
       },
       {
         path: 'addteammembers/:id',
         component: TeammembersComponent
       },
       {
        path: 'signup',
        component: SignupFormComponent
      },
      {
        path: 'viewusers',
        component: ViewusersComponent

      },
      {
        path: 'viewspr/:id',
        component: ViewSprintsComponent

      },
      {
        path: 'viewint/:id',
        component: ViewUiComponent

      },
      {
        path: 'viewtask/:id',
        component: ViewTasksComponent

      },
      {
        path: 'addui/:id',
        component: AddUiComponent

      },
      {
        path: 'addtsk/:id',
        component: AddTaskComponent

      },
      {
        path:'addspr/:id',
        component: AddSprintComponent
      }
     ]
  },


];



@NgModule({
  declarations: [
    AppComponent,
    SigncomponentComponent,
    HomeComponent,
    GetStartedComponent,
    UserDashboardComponent,
    ErrorComponentComponent,
    AdminDashboardComponent,
    ProfileViewComponent,
    SignupFormComponent,
    CreateProjectsComponent,
    ViewProjectsComponent,
    UpdateProjectSettComponent,
    UpdateProfileComponent,
    PasswordChangeComponent,
    CreateTeamComponent,
    ViewTeamComponent,
    ViewBugTickitComponent,
    CreateBugTickitComponent,
    CloseBugTickitComponent,
    ViewTodoComponent,
    CreateTodoComponent,
    NewsFeedsComponent,
    MainPageComponent,
    LoadingPageComponent,
    HamburgerComponent,
    UserHamburgerComponent,
    TeammembersComponent,
    UserprojectsComponent,
    UserTeamsComponent,
    ViewusersComponent,
    ViewSprintsComponent,
    ViewUiComponent,
    ViewTasksComponent,
    AddSprintComponent,
    AddUiComponent,
    AddTaskComponent,
    PmDashboardComponent,
    PmHamburgerComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    

  ],
  providers: [HttpWebApiService, UserAuthService, AuthGuard, AdminAuthGuard, PasswordGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
