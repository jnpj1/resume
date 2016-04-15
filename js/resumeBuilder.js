var bio = {
	"name": "J. Dizzle",
	"role": "Budding Front-End Developer",
	"contacts": {
		"email": "jdizzle@gmail.com",
		"location": "Gloucester, UK",
		"mobile": "(123)456-7890",
		"github": "jnburke1",
		"twitter": "jdizzle"
	},
	"bioPic": "images/kitten.jpg",
	"welcomeMessage": "Hi!",
	"skills": ["microbiology", "playing piano"]
}

var work = {
	"jobs": [
		{
		"employer": "FDA",
		"title": "Microbiologist",
		"location": "Denver, CO",
		"dates": "2015",
		"description": "Performed microbiology techniques to detect pathogens in food."
		},
		{
		"employer": "Colorado State Public Health Laboratory",
		"title": "Public Health Microbiologist",
		"location": "Denver, CO",
		"dates": "2013-2015",
		"description": "Performed public health microbiology."
		},
		{
		"employer": "Quest Diagnostics",
		"title": "Medical Technologist",
		"location": "Denver, CO",
		"dates": "2012-2015",
		"description": "Performed microbiology and molecular biology diagnostic methods."
		}
	]
}

var education = {
	"schools": [
		{
		"name": "Edinburgh Napier University",
		"location": "Edinburgh",
		"degree": "MSc",
		"majors": ["Biomedical Sciences"],
		"dates": 2008,
		"url": "http://www.napier.ac.uk"
		},
		{
		"name": "University of California, San Diego",
		"location": "San Diego, CA",
		"degree": "BS",
		"majors": ["Microbiology"],
		"dates": 2006,
		"url": "https://www.ucsd.edu"
		}
	],
	"onlineCourses": [
		{
		"title": "Front End Web Developer Track",
		"school": "Udacity",
		"date": 2016,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
		"title": "JavaScript and jQuery",
		"school": "Codecademy",
		"date": 2016,
		"url": "https://www.codecademy.com/learn"			
		},
		{
		"title": "Learn to Program: The Fundamentals",
		"school": "Coursera",
		"date": 2013,
		"url": "https://www.coursera.org/course/programming1"			
		}
	]
}	

var projects = {
	"projects": [
		{
		"title": "M(ASCP)",
		"dates": "2014 - present",
		"description": "Microbiology Medical Technologist Certificate",
		"images": "images/ascp.png"
		},
		{
		"title": "PHM2125",
		"dates": "2012 - present",
		"description": "California Public Health Microbiologist Certificate",
		"images": "images/cdph.png"
		}
	]
}

bio.display =  function() {
	var formattedName = HTMLheaderName.replace("%data%", this.name);
	var formattedRole = HTMLheaderRole.replace("%data%", this.role);
	var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
	var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
	var formattedPic = HTMLbioPic.replace("%data%", this.bioPic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelcome);
	$("#header").append(HTMLskillsStart);
	for (var skill in this.skills) {
		var formattedSkill = HTMLskills.replace("%data%", this.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

work.display = function() {
	for (job in this.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}	
}

projects.display = function() {
	for (project in this.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", this.projects[project].images);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

education.display = function() {
	for (var school in this.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedURL = HTMLschoolURL.replace("%data%", this.schools[school].url);
		var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
		$(".education-entry:last").append(formattedURL + formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		for (var major in this.schools[school].majors) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajor);
		}
	}
	$("#education").append(HTMLonlineClasses);
	for (var course in this.onlineCourses) {
		$("#education").append(HTMLonlineStart);
		var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
		var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].date);
		$(".online-entry:last").append(formattedURL + formattedTitle + formattedSchool);
		$(".online-entry:last").append(formattedDates);
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
