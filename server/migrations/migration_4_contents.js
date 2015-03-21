'use strict';
Migrations.add({
	name: 'Create admin user',
	version: 4,

	up: function() {
		Accounts.createUser({
			username: 'admin',
			email: 'albertmatyi@gmail.com',
			password: 'asdasd',
			profile: {}
		});
	},
	down: function() {
	}
});

//Migrations.migrateTo('4,rerun');
