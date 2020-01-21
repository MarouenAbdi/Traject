import Sequelize from 'sequelize';
import _ from 'lodash';
import { isPrimitive } from 'util';

/*  Database Connection */

const Conn = new Sequelize(
  'test1',
  'root',
  '',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
);

/*  Tables Structures  */

const Users = Conn.define('users', {
  Id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },         
  email: { type: Sequelize.STRING, validate: { isEmail: true } },
  password: { type: Sequelize.STRING, allowNull: false },
  firstName: { type: Sequelize.STRING, allowNull: false },
  dob: { type: Sequelize.DATEONLY, allowNull: false },
  userType: { type: Sequelize.STRING, allowNull: false },

  
});

const Events = Conn.define('events', {
  Id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement:true}, 
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  createdBy: { type: Sequelize.STRING, allowNull: false },
  createDate: { type: Sequelize.DATEONLY, allowNull: false },
  deadline: { type: Sequelize.DATEONLY, allowNull: false },

});


const Projects = Conn.define('projects', {
  Id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },    
  name: { type: Sequelize.STRING, allowNull: false },
  client: { type: Sequelize.STRING, allowNull: false },
  projectmanager: { type: Sequelize.STRING, allowNull: false },
  location: { type: Sequelize.STRING, allowNull: false },
  startDate: { type: Sequelize.DATEONLY, allowNull: false },
  endDate: { type: Sequelize.DATEONLY, allowNull: true },
  estimatedDuration: { type: Sequelize.STRING, allowNull: false },
  actualDuration: { type: Sequelize.STRING, allowNull: true }
});

const Teams = Conn.define('teams', {
  Id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement:true}, 
  teamName: { type: Sequelize.STRING, allowNull: false }, 
  creationDate: { type: Sequelize.DATEONLY, allowNull: false },
});

const Sprints = Conn.define('sprints', {
  Id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement:true}, 
  sprintNumber: { type: Sequelize.INTEGER, allowNull: false },
  startDate: { type: Sequelize.DATEONLY, allowNull: false },
  endDate: { type: Sequelize.DATEONLY, allowNull: true },
  estimatedDuration: { type: Sequelize.STRING, allowNull: false },
  actualDuration: { type: Sequelize.STRING, allowNull: true }
});

const Interfaces = Conn.define('interfaces', {
  Id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
  type: { type: Sequelize.STRING, allowNull: false },
  sense: { type: Sequelize.STRING, allowNull: false },
  sourceSys: { type: Sequelize.STRING, allowNull: false },
  targetSys: { type: Sequelize.STRING, allowNull: false },
  startDate: { type: Sequelize.DATEONLY, allowNull: false },
  endDate: { type: Sequelize.DATEONLY, allowNull: true },
  estimatedDuration: { type: Sequelize.STRING, allowNull: false },
  actualDuration: { type: Sequelize.STRING, allowNull: true }
});

const Tasks = Conn.define('tasks', {
  Id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement:true}, 
  taskType: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  consultant: { type: Sequelize.STRING, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false },
  startDate: { type: Sequelize.DATEONLY, allowNull: false },
  endDate: { type: Sequelize.DATEONLY, allowNull: true },
  estimatedDuration: { type: Sequelize.STRING, allowNull: false },
  actualDuration: { type: Sequelize.STRING, allowNull: true }
});


const Notifications = Conn.define('notifications', {
  Id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement:true}, 
  sTimestamp: { type: Sequelize.DATEONLY, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  body: { type: Sequelize.STRING, allowNull: false },
});



const Bugs = Conn.define('bugs', {
  Id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement:true}, 
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  type: { type: Sequelize.STRING, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false },
  bookedBy:{ type: Sequelize.STRING, allowNull: false },
  bookedOn: { type: Sequelize.DATEONLY, allowNull: false },
  resolvedBy: { type: Sequelize.STRING, allowNull: false },
  verifiedBy: { type: Sequelize.STRING, allowNull: false },
  verifiedOn: { type: Sequelize.DATEONLY, allowNull: false }
});


/*  Relations  */
Projects.hasMany(Teams);
Users.belongsToMany(Events, {through: 'users_events',foreignKey: 'userId'});
Events.belongsToMany(Users, {through: 'users_events',foreignKey: 'eventId'});
Projects.hasMany(Bugs);
Teams.hasMany(Users);
Users.belongsTo(Teams);
Users.hasMany(Notifications);
Projects.hasMany(Sprints);
Sprints.hasMany(Interfaces);
Interfaces.hasMany(Tasks);



/* ======== Generating the DATABASE ========= */

//Conn.sync({ force: true });


export default Conn;
