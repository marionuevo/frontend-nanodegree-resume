var work = {
	"jobs" : [
		{
			"employer" : "AENA",
			"title" : "Aerial Navigation Technician",
			"location" : "Canary Islands",
			"dates" : "2007-2014",
			"description" : "Ensure required maintenance of navigation systems"
		},
		{
			"employer" : "Freelance",
			"title" : "Graphic Designer",
			"location" : "Canary Islands",
			"dates" : "2005-2007",
			"description" : "WWW design and development. HTML, PHP, ActionScript"
		}
	],
	display : function () {
		if (work.jobs.length>0) {
			for (item in work.jobs) {
				$("#workExperience").append(HTMLworkStart);
				var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
				var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
				var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
				var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
				var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
				$(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
				$(".work-entry:last").append(formattedWorkDates);
				$(".work-entry:last").append(formattedWorkLocation);
				$(".work-entry:last").append(formattedWorkDescription);
			}	
		}
	}
};

var projects = {
	"projects" : [
		{
			"title" : "A project",
			"dates" : "2007-2014",
			"description" : "Some description",
			"images" : ["http://placehold.it/300x150","http://placehold.it/300x150"]
		}
	],
	display : function () {
		for (item in this.projects) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",this.projects[item].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",this.projects[item].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",this.projects[item].description));
			for (img in this.projects[item].images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%",this.projects[item].images[img]));
			}
		}
	}
};

var bio = {
	"name" : "Mario Nuevo",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my resume page",
	"contacts" : {
			"mobile" : "+34629451265",
			"email" : "marionuevo@gmail.com",
			"github" : "marionuevo",
			"twitter" : "@marionuevo",
			"location" : "Adeje"
	},
	"skills" : ["awesomeness","progamming", "JS"],
	"biopic" : "http://placehold.it/150x150",
	display : function () {
		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
		
		$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));

		if (bio.skills.length>0) {
			$("#header").append(HTMLskillsStart);
			for (item in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

var education = {
	"schools" : [
		{
			"name" : "UOC",
			"location" : "Barcelona",
			"degree" : "Telecomm. Engineering Degree",
			"majors" : [],
			"dates" : "2007-2014",
			"url" : "images/edu.jpg"
		}],
	"onlineCourses" : [
		{
			"title" : "Intro to Computer Science",
			"school" : "Udacity",
			"dates" : "2013",
			"url" : "http://www.udacity.com"
		}],
	display : function () {
		for (item in this.schools) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",this.schools[item].name) + HTMLschoolDegree.replace("%data%",this.schools[item].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",this.schools[item].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",this.schools[item].location));
		};
		for (item in this.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineClasses);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",this.onlineCourses[item].title) + HTMLonlineSchool.replace("%data%",this.onlineCourses[item].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",this.onlineCourses[item].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",this.onlineCourses[item].url));
		};
	}
};

//$("#main").append(work["position"]);


bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
  console.log (loc.pageX, loc.pageY)
});

function inName(fullName) {
	var parts = fullName.trim().split(' ');
	console.log(parts);
	var surName = parts[1].toUpperCase();
	var name = parts[0].slice (1).toLowerCase();
	var firstLetter = fullName[0].toUpperCase();
	console.log (firstLetter + name + " " + surName);
	return firstLetter + name + " " + surName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


