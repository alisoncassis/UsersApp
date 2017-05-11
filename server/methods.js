Meteor.methods({
	adiciona : function(obj) {
		Usuarios.insert({name: obj.user.name, email: obj.user.email, profile: obj.user.profile, data: new Date(),
       managerId: this.userId});
	},

	remove : function(id) {
		Usuarios.remove({_id : id, managerId: this.userId});
	}

});
