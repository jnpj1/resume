var bio = {
	'name': 'Julie N. Burke',
	'role': 'Front-End Developer',
	'contacts': {
		'mobile': '678-500-9081',
		'email': 'jnb.developer@gmail.com',
		'github': 'jnpj1',
		'twitter': 'jnbdeveloper',
		'location': 'Gloucester, UK'
	},
	'welcomeMessage': 'Results-driven web developer with excellent analytical skills, strong problem-solving ability, and enthusiasm for developing technical proficiencies',
	'skills': [
				'Languages: HTML, CSS, JavaScript',
				'Frameworks/Libraries: Bootstrap, JQuery, Knockout.js, Jasmine',
				'Build Tools: Grunt, Bower, npm',
				'Version Control: Git/GitHub',
				'Performance Optimization',
				'Responsive Design'
	],
	'biopic': 'images/logo.png'
};

var work = {
	'jobs': [
		{
			'employer': 'Colorado State Public Health Laboratory',
			'title': 'Public Health Microbiologist',
			'location': 'Denver, CO',
			'dates': '2013-2015',
			'description': 'Performed accurate, efficient scientific testing in the microbiology, serology, molecular biology, and biosecurity laboratories.  Analyzed data and produced high-quality results.  Characterized extremely unususal pathogens, conducted highly complex analyses, and troubleshooted problems successfully.  Actively pursued opportunities to further develop laboratory skills, becoming the individual with the greatest amount of analytical proficiencies in the laboratory.',
			'url': 'https://www.colorado.gov/pacific/cdphe/categories/services-and-information/laboratory-services'
		},
		{
			'employer': 'Quest Diagnostics',
			'title': 'Medical Technologist',
			'location': 'Denver, CO',
			'dates': '2012-2015',
			'description': 'Conducted high-volume diagnostic testing in a medical microbiology laboratory.  Led implementation of new procedures and testing capabilities.  Trained staff in use of procedures and instrumentation.',
			'url': 'http://www.questdiagnostics.com/home.html'
		},
		{
			'employer': 'California State Public Health Laboratory',
			'title': 'Public Health Microbiologist',
			'location': 'Richmond, CA',
			'dates': '2010-2011',
			'description': 'Performed specialized botulism testing.  Optimized testing procedures and investigated unusual results.  Independently identified and characterized rare microorganism of important research significance.',
			'url': 'https://www.cdph.ca.gov/programs/ibtpp/Pages/default.aspx'
		}
	]
};

var education = {
	'schools': [
		{
			'name': 'Edinburgh Napier University',
			'location': 'Edinburgh',
			'degree': 'MSc',
			'majors': ['Biomedical Sciences'],
			'dates': '2008',
			'url': 'http://www.napier.ac.uk'
		},
		{
			'name': 'University of California, San Diego',
			'location': 'San Diego, CA',
			'degree': 'BS',
			'majors': ['Microbiology'],
			'dates': '2006',
			'url': 'https://www.ucsd.edu'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front End Web Developer Nanodegree',
			'school': 'Udacity',
			'dates': 'In Progress',
			'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
		{
			'title': 'Learn to Program: The Fundamentals',
			'school': 'Coursera',
			'dates': '2013',
			'url': 'https://www.coursera.org/course/programming1'
		}
	]
};

var projects = {
	'projects': [
		{
			'title': 'Portfolio',
			'dates': '2016',
			'description': 'Built responsive portfolio site with Bootstrap',
			'images': ['images/portfolio.png'],
			'url': 'https://jnpj1.github.io'
		},
		{
			'title': 'Girls Vs. Bugs Arcade Game',
			'dates': '2016',
			'description': 'Coded game entities and features using object-oriented JavaScript',
			'images': ['images/girlsvsbugs.png', 'images/girlsvsbugs2.png'],
			'url': 'https://jnpj1.github.io/arcade-game'
		},
		{
			'title': 'Cat Clicker',
			'dates': '2016',
			'description': 'Built single-page click-tracking app with JavaScript MVC design pattern',
			'images': ['images/catclicker.png'],
			'url': 'https://jnpj1.github.io/cat-clicker'
		},
		{
			'title': 'National Park Finder',
			'dates': '2016',
			'description': 'Created a single-page, responsive application to provide pictures and information on national parks.  Built with Knockout.js, Google Map API, and Wikipedia API.',
			'images': ['images/nationalpark.png', 'images/nationalpark2.png'],
			'url': 'https://jnpj1.github.io/national-park-finder'
		}
	]
};

bio.display =  function() {
	var formattedName = HTMLheaderName.replace('%data%', this.name);
	var formattedRole = HTMLheaderRole.replace('%data%', this.role);
	var formattedEmail = HTMLemail.replace('%data%', this.contacts.email);
	var formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
	var formattedTwitter = HTMLtwitter.replace('%data%', this.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', this.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);
	var formattedPic = HTMLbiopic.replace('%data%', this.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
	var formattedFooterGithub = HTMLconnectGithub.replace('%data%', this.contacts.github);
	var formattedFooterEmail = HTMLconnectEmail.replace('%data%', this.contacts.email);
	var formattedFooterMobile = HTMLconnectPhone.replace('%data%', this.contacts.mobile);
	var formattedFooterSkype = HTMLconnectSkype.replace('%data%', this.contacts.email);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#top-contacts').append(formattedEmail);
	$('#top-contacts').append(formattedMobile);
	$('#top-contacts').append(formattedTwitter);
	$('#top-contacts').append(formattedGithub);
	$('#top-contacts').append(formattedLocation);
	$('#header').append(formattedPic);
	$('#header').append(formattedWelcome);
	$('#header').append(HTMLskillsStart);
	this.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace('%data%', skill);
		$('#skill-list').append(formattedSkill);
	});
	$('#footer-contacts').append(formattedFooterGithub);
	$('#footer-contacts').append(formattedFooterEmail);
	$('#footer-contacts').append(formattedFooterMobile);
	$('#footer-contacts').append(formattedFooterSkype);
};

work.display = function() {
	for (var i = 0; i < this.jobs.length; i++) {
		$('#work-experience').append(HTMLworkStart);
		var formattedURL = HTMLworkURL.replace('%data%', this.jobs[i].url);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[i].title);
		var formattedWorkDates = HTMLworkDates.replace('%data%', this.jobs[i].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', this.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', this.jobs[i].description);
		$('.work-entry:last').append(formattedURL + formattedEmployer + formattedTitle);
		$('.work-entry:last').append(formattedWorkDates);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDescription);
	}
};

projects.display = function() {
	for (var i = 0; i < this.projects.length; i++) {
		$('#projects').append(HTMLprojectStart);
		var formattedURL = HTMLprojectURL.replace('%data%', this.projects[i].url);
		var formattedTitle = HTMLprojectTitle.replace('%data%', this.projects[i].title);
		var formattedDates = HTMLprojectDates.replace('%data%', this.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects[i].description);
		$('.project-entry:last').append(formattedURL + formattedTitle);
		$('.project-entry:last').append(formattedDates);
		$('.project-entry:last').append(formattedDescription);
		this.projects[i].images.forEach(function(image) {
			var formattedImage = HTMLprojectImage.replace('%data%', image);
			$('.project-entry:last').append(formattedImage);
		});
	}
};

education.display = function() {
	for (var i = 0; i < this.schools.length; i++) {
		$('#education').append(HTMLschoolStart);
		var formattedURL = HTMLschoolURL.replace('%data%', this.schools[i].url);
		var formattedName = HTMLschoolName.replace('%data%', this.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', this.schools[i].degree);
		var formattedDates = HTMLschoolDates.replace('%data%', this.schools[i].dates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', this.schools[i].location);
		$('.education-entry:last').append(formattedURL + formattedName + formattedDegree);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append(formattedLocation);
		this.schools[i].majors.forEach(function(major) {
			var formattedMajor = HTMLschoolMajor.replace('%data%', major);
			$('.education-entry:last').append(formattedMajor);
		});
	}
	$('#education').append(HTMLonlineClasses);
	for (var i = 0; i < this.onlineCourses.length; i++) {
		$('#education').append(HTMLonlineStart);
		var formattedURL = HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);
		var formattedTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
		var formattedDates = HTMLonlineDates.replace('%data%', this.onlineCourses[i].dates);
		$('.online-entry:last').append(formattedURL + formattedTitle + formattedSchool);
		$('.online-entry:last').append(formattedDates);
	}
};

bio.display();
work.display();
projects.display();
education.display();

$('#map-div').append(googleMap);
