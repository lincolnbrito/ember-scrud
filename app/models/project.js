import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  projectType: DS.attr('string'),
  amount: DS.attr('number')
}).reopenClass({
	FIXTURES: [
		{
			name: 'Funny App',
			projectType: 'Android App',
			amount: 5000
		},{
			name: 'Big Project',
			projectType: 'Web',
			amount: 1000
		},{
			name: 'Company Website',
			projectType: 'Web',
			amount: 2000
		}
	]
});
