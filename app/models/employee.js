import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  occupation: DS.attr('string')
}).reopenClass({
	FIXTURES: [
		{
			firstName: 'Lincoln',
			lastName: 'Brito',
			email: 'lincoln.sbrito@gmail.com',
			occupation: 'Programmer'
		},{
			firstName: 'Fulano',
			lastName: 'Santos',
			email: 'fulano@mail.com',
			occupation: 'System Analist'
		},{
			firstName: 'Sicrano',
			lastName: 'Souto',
			email: 'sicrano@mail.com',
			occupation: 'Webdesigner'
		}

	]
});
