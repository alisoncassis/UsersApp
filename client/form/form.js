Template.form.events({

	"submit form": function(e, template) {
		e.preventDefault();

		var name = $("#name").val();
		var email = $("#email").val();
		var profile = $("#profile").val();

		var user = {
			name: name,
			email: email,
			profile: profile
		};

		//Tarefas.insert({nome: nome, data: new Date()});
		Meteor.call("adiciona", {user});
		$("#name").val("");
		$("#email").val("");
		$("#profile").val("");
	}
});
