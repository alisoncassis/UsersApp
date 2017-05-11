import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.publish("usuarios", function(){
    return  Usuarios.find({managerId: this.userId});
  });
});
