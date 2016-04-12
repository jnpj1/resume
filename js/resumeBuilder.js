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
};


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
		"dates": "2007-2008",
		"url": "http://www.napier.ac.uk"
	},
	{
		"name": "University of California, San Diego",
		"location": "San Diego, CA",
		"degree": "BS",
		"majors": ["Microbiology"],
		"dates": "2002-2006",
		"url": "https://www.ucsd.edu"
	}
	]
}	

var projects = {
	"projects": [
	{
		"title": "M(ASCP)",
		"dates": "Through present",
		"description": "Microbiology Medical Technologist Certificate",
		"images": "images/ascp.png"
	},
	{
		"title": "PHM2125",
		"dates": "Through present",
		"description": "California Public Health Microbiologist Certificate",
		"images": "images/cdph.png"
	}
	]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images)
		$(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display();

$("#mapDiv").append(googleMap);
