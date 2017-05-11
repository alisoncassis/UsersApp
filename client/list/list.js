Template.list.helpers({
	usuarios: function() {
		return Usuarios.find({});
	},

	formataData : function() {
		return moment(this.data).format('DD/MM/YYYY HH:mm');
	}
});

Template.list.events({
	"click button" : function(e, template) {
		var usuario = this;

		//Tarefas.remove({_id : tarefa._id });
		Meteor.call("remove", usuario._id);
	}
});
