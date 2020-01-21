import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLDecimal,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';
import Db from './db';


// ******* TABLE STRUCTURE *********

const User = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User/adminastrator/project manager',
  fields: () => {
    return {

      Id: { type: GraphQLString,
        resolve(users) { return users.Id; } },
      email: {type: GraphQLString,
        resolve(users) { return users.email; } },
      password: { type: GraphQLString,
        resolve (users) { return users.password; } },
      firstName: { type: GraphQLString,
        resolve (users) { return users.firstName; } },
      dob: { type: GraphQLDate,
        resolve (users) { return users.dob; } },
      userType: { type: GraphQLString,
        resolve (users) { return users.userType; } }, 
      };
  }
});


const Project = new GraphQLObjectType({
  name: 'Project',
  description: 'This represents a Project -- Static',
  fields: () => {
    return {

      Id: { type: GraphQLString,
        resolve (projects) { return projects.Id; } },
      name: {type: GraphQLString,
        resolve (projects) { return projects.name; } },
      client: { type: GraphQLString,
        resolve (projects) { return projects.client; } },
      projectmanager: { type: GraphQLString,
        resolve (projects) { return projects.projectmanager; } },
      location: { type: GraphQLString,
          resolve (projects) { return projects.location; } },
      startDate: { type: GraphQLDate,
        resolve (projects) { return projects.startDate; } },
      endDate: { type: GraphQLDate,
        resolve (projects) { return projects.endDate; } },
      estimatedDuration: { type: GraphQLString,
        resolve (projects) { return projects.estimatedDuration; } },
      actualDuration: { type: GraphQLString,
        resolve (projects) { return projects.actualDuration; } },
    };
  }
});


const Team = new GraphQLObjectType({
  name: 'Team',
  description: 'This represents a Team -- Static',
  fields: () => {
    return {

      Id: { type: GraphQLString,
        resolve (teams) { return teams.Id; } },
      teamName: {type: GraphQLString,
        resolve (teams) { return teams.teamName; } },
      creationDate: { type: GraphQLDate,
        resolve (teams) { return teams.creationDate; } },
      projectId: { type: GraphQLString,
        resolve (teams) { return teams.projectId; } },
    };
  }
});


const Sprint = new GraphQLObjectType({
  name: 'Sprint',
  description: 'This represents a sprint',
  fields: () => {
    return {
      Id: { type: GraphQLString,
        resolve (sprints) { return sprints.Id; } },
      sprintNumber: { type: GraphQLString,
        resolve (sprints) { return sprints.sprintNumber; } },
      startDate: { type: GraphQLDate,
        resolve (sprints) { return sprints.startDate; } },
      endDate: { type: GraphQLDate,
        resolve (sprints) { return sprints.endDate; } },
      estimatedDuration: { type: GraphQLString,
        resolve (sprints) { return sprints.estimatedDuration; } },
      actualDuration: { type: GraphQLString,
        resolve (sprints) { return sprints.actualDuration; } },
      projectId: { type: GraphQLString,
        resolve (sprints) { return sprints.projectId; } }
    };
  }
});

const Interface = new GraphQLObjectType({
  name: 'Interface',
  description: 'This represents an Interface',
  fields: () => {
    return {
      Id: { type: GraphQLString,
        resolve (interfaces) { return interfaces.Id; } },
      type: { type: GraphQLString,
        resolve (interfaces) { return interfaces.type; } },
      sense: { type: GraphQLString,
        resolve (interfaces) { return interfaces.sense; } },
      sourceSys: { type: GraphQLString,
          resolve (interfaces) { return interfaces.sourceSys; } },
      targetSys: { type: GraphQLString,
        resolve (interfaces) { return interfaces.targetSys; } },
      startDate: { type: GraphQLDate,
        resolve (interfaces) { return interfaces.startDate; } },
      endDate: { type: GraphQLDate,
        resolve (interfaces) { return interfaces.endDate; } },
      estimatedDuration: { type: GraphQLString,
        resolve (interfaces) { return interfaces.estimatedDuration; } },
      actualDuration: { type: GraphQLString,
        resolve (interfaces) { return interfaces.actualDuration; } },
      sprintId: { type: GraphQLString,
        resolve (interfaces) { return interfaces.sprintId; } }
    };
  }
});



const Task = new GraphQLObjectType({
  name: 'Task',
  description: 'This represents a task',
  fields: () => {
    return {
      Id: { type: GraphQLString,
        resolve (tasks) { return tasks.Id; } },
      taskType: { type: GraphQLString,
        resolve (tasks) { return tasks.taskType; } },
      description: { type: GraphQLString,
        resolve (tasks) { return tasks.description; } },
      consultant: {type: GraphQLString,
        resolve (tasks) { return tasks.consultant; } },
      status: { type: GraphQLString,
        resolve (tasks) { return tasks.status; } },
      startDate: { type: GraphQLDate,
        resolve (tasks) { return tasks.startDate; } },
      endDate: { type: GraphQLDate,
        resolve (tasks) { return tasks.endDate; } },
      estimatedDuration: { type: GraphQLString,
        resolve (tasks) { return tasks.estimatedDuration; } },
      actualDuration: { type: GraphQLString,
        resolve (tasks) { return tasks.actualDuration; } },
      interfaceId: { type: GraphQLString,
        resolve (tasks) { return tasks.interfaceId; } }
    };
  }
});




const Notification = new GraphQLObjectType({
  name: 'Notification',
  description: 'This represents a Notification ',
  fields: () => {
    return {
      Id: { type: GraphQLString,
        resolve (notifications) { return notifications.Id; } },
      sTimestamp: { type: GraphQLDate,
        resolve (notifications) { return notifications.sTimestamp; } },
      title: { type: GraphQLString,
        resolve (notifications) { return notifications.title; } },
      body: { type: GraphQLString,
        resolve (notifications) { return notifications.body; } },
      userId: { type: GraphQLString,
          resolve (notifications) { return notifications.userId; } }
    };
  }
});


const Event = new GraphQLObjectType({
  name: 'Event',
  description: 'This represents an event',
  fields: () => {
    return {
      Id: { type: GraphQLString,
        resolve (Events) { return Events.Id; } },
      title: {type: GraphQLString,
        resolve (Events) { return Events.title; } },
      description: { type: GraphQLString,
        resolve (Events) { return Events.description; } },
      createdBy: { type: GraphQLString,
        resolve (Events) { return Events.createdBy; } },
      createDate: { type: GraphQLDate,
        resolve (Events) { return Events.createDate; } },
      deadline: { type: GraphQLDate,
        resolve (Events) { return Events.deadline; } },
    
    };
  }
});

const user_event = new GraphQLObjectType({
  name: 'user_event',
  description: 'This represents the joint table users_events',
  fields: () => {
    return {

      userId: { type: GraphQLString,
        resolve (users_events) { return users_events.Id; } },
      eventId: {type: GraphQLString,
        resolve (users_events) { return users_events.eventId; } },

    };
  }
});

const Bug = new GraphQLObjectType({
  name: 'Bug',
  description: 'This represents a bug',
  fields: () => {
    return {
      Id: { type: GraphQLInt,
        resolve (bugs) { return bugs.Id; } },
      title: { type: GraphQLString,
        resolve (bugs) { return bugs.title; } },
      description: {type: GraphQLString,
        resolve (bugs) { return bugs.description; } },
      type: { type: GraphQLString,
        resolve (bugs) { return bugs.type; } },
      status: { type: GraphQLString,
        resolve (bugs) { return bugs.status; } },
      bookedBy: { type: GraphQLString,
        resolve (bugs) { return bugs.bookedBy; } },
      bookedOn: { type: GraphQLDate,
        resolve (bugs) { return bugs.bookedOn; } },
      resolvedBy: { type: GraphQLString,
        resolve (bugs) { return bugs.resolvedBy; } },
      verifiedBy: { type: GraphQLString,
        resolve (bugs) { return bugs.verifiedBy; } },
      verifiedOn: { type: GraphQLDate,
        resolve (bugs) { return bugs.verifiedOn; } },
      projectId: { type: GraphQLString,
          resolve (bugs) { return bugs.projectId; } }
    };
  }
});



// ******* END OF TABLE STRUCTURE *********




// ******* QUERY (Select) *********

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query objects',
  fields: () => {
    return {

      signInAuth: {
        type: new GraphQLList(User),
        args: {
          email: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.users.findAll({ where: args });
        }
      },

      forgotPassword: {
        type: new GraphQLList(User),
        args: {
          email: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.users.findAll({ where: args });
        }
      },

      profile: {
        type: new GraphQLList(User),
        args: {
          Id: { type: GraphQLString },
          email: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.users.findAll({ where: args });
        }
      },

      userList: {
        type: new GraphQLList(User),
        resolve (root, args) {
          return Db.models.users.findAll();
        }
      },

      pmList: {
        type: new GraphQLList(User),
        args:{
          userType: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve (root, args) {
          return Db.models.users.findAll({where: args});
        }
      },


      projectList: {
        type: new GraphQLList(Project),
        resolve (root, args) {
          return Db.models.projects.findAll();
        }
      },

      projectDetails: {
        type: new GraphQLList(Project),
        args: {
          Id: { type: GraphQLString },
          name: { type: GraphQLString },
          projectmanager: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.projects.findAll({ where: args });
        }
      },

      allTeam: {
        type: new GraphQLList(Team),
        resolve (root, args) {
          return Db.models.teams.findAll();}

      },
      teamDetails: {
        type: new GraphQLList(Team),
        args: {
          Id: { type: GraphQLString },
        },
        resolve (root, args) {
          return Db.models.teams.findAll({ where: args });
        }
      },


      getEvents: {
        type: new GraphQLList(Event),
        args: {
          Id: { type: GraphQLString },
          title: { type: GraphQLString },

        },
        resolve (root, args) {
          return Db.models.events.findAll({ where: args });
        }
      },

      getUserevent:{
        type: new GraphQLList(user_event),
        args:{
          userId:{ type: GraphQLString}
        },
        resolve (root, args) {
          return Db.models.users_events.findAll({ where: args });
        }
      },

      getbugs: {
        type: new GraphQLList(Bug),
        args:{
          status:{ type:GraphQLString}
        },
        resolve (root, args) {
          return Db.models.bugs.findAll({ where: args });
        }
      },

      getbugswaiting: {
        type: new GraphQLList(Bug),
        args:{
          status:{ type:GraphQLString},
          bookedBy:{ type:GraphQLString}
        },
        resolve (root, args) {
          return Db.models.bugs.findAll({where: args});
        }
      },

      newsFeeds: {
        type: new GraphQLList(Notification),
        args: {
          userId: { type: GraphQLString },
        },
        resolve (root, args) {
          return Db.models.notifications.findAll({ where: args });
        }
      },

      allprj:{
        type: new GraphQLList(Project),
        resolve (root, args) {
          return Db.models.projects.findAll({ where: args });
        }


      },

      getSprints:{
        type: new GraphQLList(Sprint),
        args: {
          projectId: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve (root, args) {
          return Db.models.sprints.findAll({ where: args });
        }


      },

      getInt:{
        type: new GraphQLList(Interface),
        args: {
          sprintId: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve (root, args) {
          return Db.models.interfaces.findAll({ where: args });
        }


      },

      gettask:{
        type: new GraphQLList(Task),
        args: {
          interfaceId: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve (root, args) {
          return Db.models.tasks.findAll({ where: args });
        }


      },






    };
  }
});


// ******* END Q *********






// ******* MUTATION (Insert , Update and Delete) *********


const Mutation = new GraphQLObjectType({
  name:'Mutation',
  description: 'For implementing CRUD features',
  fields:{

// ******* API STRUCTURE *********

    signUpUser:{
      type: User,
      args: {
          Id: { type: new GraphQLNonNull(GraphQLString) },
          email: { type: new GraphQLNonNull(GraphQLString) },
          password: { type: new GraphQLNonNull(GraphQLString) },
          firstName: { type: new GraphQLNonNull(GraphQLString) },
          dob: { type: new GraphQLNonNull(GraphQLDate) },
          userType: { type: new GraphQLNonNull(GraphQLString) },
     
      },
      resolve (_, args) {
        return Db.models.users.create({
          Id: args.Id,
          email: args.email.toLowerCase(),
          password: args.password,
          firstName: args.firstName,
          dob: args.dob,
          userType: args.userType,
      

        });
      }
    },


    createProject:{
      type: Project,
      args: {
          Id: { type: new GraphQLNonNull(GraphQLString) },
          name: { type: new GraphQLNonNull(GraphQLString) },
          client: { type: new GraphQLNonNull(GraphQLString) },
          projectmanager: { type: new GraphQLNonNull(GraphQLString) },
          location: { type: new GraphQLNonNull(GraphQLString) },
          startDate: { type: new GraphQLNonNull(GraphQLDate) },
          endDate: { type: new GraphQLNonNull(GraphQLDate) },
          estimatedDuration: { type: new GraphQLNonNull(GraphQLString) },
          actualDuration: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (_, args) {
        return Db.models.projects.create({
          Id: args.Id,
          name: args.name,
          client: args.client,
          projectmanager: args.projectmanager,
          location: args.location,
          startDate: args.startDate,
          endDate: args.endDate,
          estimatedDuration: args.estimatedDuration,
          actualDuration: args.actualDuration
        });
      }
    },




    createTeam: {
      type: Team,
      args: {
          teamName: { type: new GraphQLNonNull(GraphQLString) },
          creationDate: { type: new GraphQLNonNull(GraphQLDate) },
          projectId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve (_, args) {
        return Db.models.teams.create({
          teamName: args.teamName,
          creationDate: args.creationDate,
          projectId: args.projectId,
        });
      }
    },


    createevent:{
      type: Event,
      args: {
          title: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: new GraphQLNonNull(GraphQLString) },
          createdBy: { type: new GraphQLNonNull(GraphQLString) },
          createDate: { type: new GraphQLNonNull(GraphQLDate) },
          deadline: { type: new GraphQLNonNull(GraphQLDate) }

      },
      resolve (_, args) {
        return Db.models.events.create({
          title: args.title,
          description: args.description,
          createdBy: args.createdBy,
          createDate: args.createDate,
          deadline: args.deadline,

        });
      }
    },

    setuserevent:{
      type: user_event,
      args:{
        userId:{ type: GraphQLString},
        eventId:{ type: GraphQLString}
      },
      resolve (_, args) {
        return Db.models.users_events.create({
          userId: args.userId,
          eventId: args.eventId
        });
      }

    },


    createbugs:{
      type: Bug,
      args: {
          title: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: new GraphQLNonNull(GraphQLString) },
          type: { type: new GraphQLNonNull(GraphQLString) },
          status: { type: new GraphQLNonNull(GraphQLString) },
          bookedBy: { type: new GraphQLNonNull(GraphQLString) },
          bookedOn: { type: new GraphQLNonNull(GraphQLDate) },
          resolvedBy: { type: new GraphQLNonNull(GraphQLString) },
          verificationStatus: { type: new GraphQLNonNull(GraphQLString) },
          verifiedBy: { type: new GraphQLNonNull(GraphQLString) },
          verifiedOn: { type: new GraphQLNonNull(GraphQLDate) },
          projectId: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (_, args) {
        return Db.models.bugs.create({
          title: args.title,
          description: args.description,
          type: args.type,
          status: args.status,
          bookedBy: args.bookedBy,
          bookedOn: args.bookedOn,
          resolvedBy: args.resolvedBy,
          verificationStatus: args.verificationStatus,
          verifiedBy: args.verifiedBy,
          verifiedOn: args.verifiedOn,
          projectId: args.projectId

        });
      }
    },

    createtask:{
      type: Task,
      args:{
        taskType:{ type: new GraphQLNonNull(GraphQLString) },
        description:{ type: new GraphQLNonNull(GraphQLString) },
        consultant:{ type: new GraphQLNonNull(GraphQLString) },
        status:{ type: new GraphQLNonNull(GraphQLString) },
        startDate: { type: new GraphQLNonNull(GraphQLDate) },
        endDate: { type: new GraphQLNonNull(GraphQLDate) },
        estimatedDuration: { type: new GraphQLNonNull(GraphQLString) },
        actualDuration: { type: new GraphQLNonNull(GraphQLString) },
        interfaceId:{ type: new GraphQLNonNull(GraphQLString) },
      },
      resolve (_, args) {
        return Db.models.tasks.create({
          taskType:args.taskType,
          description:args.description,
          consultant:args.consultant,
          status:args.status,
          startDate:args.startDate,
          endDate:args.endDate,
          estimatedDuration:args.estimatedDuration,
          actualDuration:args.actualDuration,
          interfaceId:args.interfaceId,


         });
      }
      

    },

    createui:{
      type: Interface,
      args:{
        Id:{ type: new GraphQLNonNull(GraphQLString) },
        type:{ type: new GraphQLNonNull(GraphQLString) },
        sense:{ type: new GraphQLNonNull(GraphQLString) },
        sourceSys:{ type: new GraphQLNonNull(GraphQLString) },
        targetSys:{ type: new GraphQLNonNull(GraphQLString) },
        startDate: { type: new GraphQLNonNull(GraphQLDate) },
        endDate: { type: new GraphQLNonNull(GraphQLDate) },
        estimatedDuration: { type: new GraphQLNonNull(GraphQLString) },
        actualDuration: { type: new GraphQLNonNull(GraphQLString) },
        sprintId:{ type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve (_, args) {
        return Db.models.interfaces.create({
          Id:args.Id,
          type:args.type,
          sense:args.sense,
          sourceSys:args.sourceSys,
          targetSys:args.targetSys,
          startDate:args.startDate,
          endDate:args.endDate,
          estimatedDuration:args.estimatedDuration,
          actualDuration:args.actualDuration,
          sprintId:args.sprintId,


         });
      }
      

    },

    createspr:{
      type: Interface,
      args:{
        sprintNumber:{ type: new GraphQLNonNull(GraphQLInt) },
        startDate: { type: new GraphQLNonNull(GraphQLDate) },
        endDate: { type: new GraphQLNonNull(GraphQLDate) },
        estimatedDuration: { type: new GraphQLNonNull(GraphQLString) },
        actualDuration: { type: new GraphQLNonNull(GraphQLString) },
        projectId:{ type: new GraphQLNonNull(GraphQLString) },
      },
      resolve (_, args) {
        return Db.models.sprints.create({
          sprintNumber:args.sprintNumber,
          startDate:args.startDate,
          endDate:args.endDate,
          estimatedDuration:args.estimatedDuration,
          actualDuration:args.actualDuration,
          projectId:args.projectId,


         });
      }
      

    },

  

    createFeed: {
      type: Notification,
      args: {
          sTimestamp: { type: new GraphQLNonNull(GraphQLDate) },
          title: { type: new GraphQLNonNull(GraphQLString) },
          body: { type: new GraphQLNonNull(GraphQLString) },
          userId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve (_, args) {
        return Db.models.notifications.create({
          sTimestamp: args.sTimestamp,
          title: args.title,
          body: args.body,
          userId: args.userId
        });
      }
    },


// ******* DELETE STRUCTURE *********

    deleteUser: {
      type: User,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(_, args) {
        return Db.models.users.destroy({ where: args});
      }
    },

    deleteTeamJoin: {
      type: Team,
      args: {
        teamId: { type: new GraphQLNonNull(GraphQLString)  },
        userId: { type: new GraphQLNonNull(GraphQLString)  },
        projectId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(_, args) {
        return Db.models.teams.destroy({ where: args});
      }
    },



// ******* UPDATE STRUCTURE *********


    passwordUpdate: {
      type: User,
      args: {
          email: { type: new GraphQLNonNull(GraphQLString) },
          password: { type: GraphQLString }
        },
        resolve (_, args) {
          return Db.models.users.update({
            password: args.password
          },{where: { email: args.email }});
        }
      },


      todoResponse: {
        type: Event,
        args: {
          id: { type: new GraphQLNonNull(GraphQLInt) },
          status: { type: GraphQLString },
          resolvedBy: { type: GraphQLString },
          resolvedOn: { type: GraphQLDate }
        },
        resolve (_, args) {
          return Db.models.Events.update({
            status: args.status,
            resolvedBy: args.resolvedBy,
            resolvedOn: args.resolvedOn
          },{where: { id: args.id }});
        }
      },

      bugsResponse: {
        type: Bug,
        args: {
          Id: { type: new GraphQLNonNull(GraphQLInt) },
          status: { type: GraphQLString },
          verifiedBy: { type: GraphQLString },
          verifiedOn: { type: GraphQLString }
        },
        resolve (_, args) {
          return Db.models.bugs.update({
            status: args.status,
            verifiedBy: args.verifiedBy,
            verifiedOn: args.verifiedOn
          },{where: { Id: args.Id }});
        }
      },



      bugsClose: {
        type: Bug,
        args: {
          Id: { type: new GraphQLNonNull(GraphQLInt) },
          status: { type: GraphQLString },
          resolvedBy: { type: GraphQLString },

        },
        resolve (_, args) {
          return Db.models.bugs.update({
            status: args.status,
            resolvedBy: args.resolvedBy,
          },{where: { Id: args.Id }});
        }
      },


      feedsResponse: {
        type: Notification,
        args: {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            status: { type: GraphQLString }
        },
        resolve (_, args) {
          return Db.models.notifications.update({
            status: args.status
          },{where: { id: args.id }});
        }
      },



      profileUpdate: {
        type: User,
        args: {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            email: { type: GraphQLString },
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            dob: { type: GraphQLDate },
            phoneNumber: { type: GraphQLString },
            company: { type: GraphQLString },
            department: { type: GraphQLString },
            address: { type: GraphQLString },
            city: { type: GraphQLString },
            state: { type: GraphQLString },
            country: { type: GraphQLString },
            zip: { type: GraphQLString }
          },
          resolve (_, args) {
            return Db.models.users.update({
              firstName: args.firstName,
              lastName: args.lastName,
              dob: args.dob,
              phoneNumber: args.phoneNumber,
              company: args.company,
              department: args.department,
              address: args.address,
              city: args.city,
              state: args.state,
              country: args.country,
              zip: args.zip
            },{where: { email: args.email }});
          }
        },

        updateProjectSettings: {
          type: Project,
          args: {
              id: { type: new GraphQLNonNull(GraphQLInt) },
              projectId: { type: GraphQLString },

              name: { type: GraphQLString },
              description: { type: GraphQLString },
              company: { type: GraphQLString },
              budget: { type: GraphQLFloat },
              manager: { type: GraphQLString },
              startDate: { type: GraphQLDate },
              endDate: { type: GraphQLDate },
          },
          resolve (_, args) {
            return Db.models.projects.update({
              name: args.name,
              description: args.description,
              company: args.company,
              budget: args.budget,
              manager: args.manager,
              startDate: args.startDate,
              endDate: args.endDate,
            },{where: { projectId: args.projectId }});
          }
        },


        updateProjectStatus: {
          type: Project,
          args: {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            projectId: { type: GraphQLString },
            status: { type: GraphQLString }
          },
          resolve (_, args) {
            return Db.models.projects.update({
              status: args.status
            },{where: { projectId: args.projectId }});
          }
        },


        updateProjectCompletion: {
          type: Project,
          args: {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            projectId: { type: GraphQLString },
            percentCompletion: { type: GraphQLFloat }
          },
          resolve (_, args) {
            return Db.models.projects.update({
              percentCompletion: args.percentCompletion
            },{where: { projectId: args.projectId }});
          }
        },



        updateTeam: {
          type: Team,
          args: {
            teamId: { type: new GraphQLNonNull(GraphQLString) },
            status: { type: GraphQLString }
          },
          resolve (_, args) {
            return Db.models.teams.update({
              status: args.status
            },{where: { teamId: args.teamId }});
          }
        },




// ******* END OF CRUD STRUCTURE *********

  }
})




// ******* SCHEMA STRUCTURE *********

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation

});

export default Schema;
