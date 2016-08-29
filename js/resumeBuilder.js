/*
This is empty on purpose! Your code to build the resume will go here.
 */
//Biography Object
 var bio = {
   "name": "Kari Schendel",
   "role": "Web Developer",
   "contacts": {
     "mobile": "952-200-5509",
     "email": "firefaded@yahoo.com",
     "github": "firefaded",
     "twitter": "@johndoe",
     "location": "Bloomington, Minnesota",
   },
   "welcomeMessage": "Welcome to my Resume!",
   "skills": [
     "JavaScript", "Cisco Networking", "Linux", "Windows"
   ],
   "bioPic": "images/fry.jpg"
 };

//Work Object
 var work = {
   "jobs": [
     {
       "employer": "Hennepin Technical College",
       "title": "Computer Lab Work Study",
       "dates": "August 2015 - May 2016",
       "location": "Brooklyn Park, Minnesota",
       "description": "Help students with issues regarding classes and homework."
     },
     {
       "employer": "Hennepin Technical College",
       "title": "Library Work Study",
       "dates": "August 2014 - May 2015",
       "location": "Eden Prairie, Minnesota",
       "description": "Help student look up resources, check books and check laptops out."
     }
   ]
 };

//Education Object
 var education = {
   "schools": [
     {
       "name": "Hennepin Technical College",
       "location": "Brooklyn Park, Minnesota",
       "degree": "A.A.S",
       "majors": ["Network Administrator/Analyst"],
       "dates": 2016,
       "url": "https://www.hennepintech.edu/"
     },
     {
       "name": "Hennepin Technical College",
       "location": "Brooklyn Park, Minnesota",
       "degree": "A.A.S",
       "majors": ["Executive Administrative Assistant"],
       "dates": 2016,
       "url": "https://www.hennepintech.edu/"
     },
     {
       "name": "Hennepin Technical College",
       "location": "Brooklyn Park, Minnesota",
       "degree": "A.A.S",
       "majors": ["Desktop Support"],
       "dates": 2015,
       "url": "https://www.hennepintech.edu/"
     },
   ],
   "onlineCourses": [
     {
       "title": "JavaScript Syntax",
       "school": "Udacity",
       "dates": 2016,
       "url": "http://www.udacity.com/course/ud804"
     }
   ]
 };

//Projects Object
 var projects = {
   "projects": [
     {
       "title": "Siberian Husky Tribute Page",
       "dates": "2015",
       "description": "Demonstration of HTML and Bootstrap",
       "images": [
         "http://codepen.io/firefaded/pen/XdpbQV/image/small.png"
       ]
     }
   ]
 };

//Function for Biography Info
 bio.display = function() {
   var name = bio.name;
   var formattedName = HTMLheaderName.replace("%data%", name);

   var role = bio.role;
   var formattedRole = HTMLheaderRole.replace("%data%", role);

   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName);

   var mobile = bio.contacts.mobile;
   var formattedMobile = HTMLmobile.replace("%data%", mobile);
   $("#topContacts").append(formattedMobile);
   $("#footerContacts").append(formattedMobile);

   var email = bio.contacts.email;
   var formattedEmail = HTMLemail.replace("%data%", email);
   $("#topContacts").append(formattedEmail);
   $("#footerContacts").append(formattedEmail);

   var github = bio.contacts.github;
   var formattedGithub = HTMLgithub.replace("%data%", github);
   $("#topContacts").append(formattedGithub);
   $("#footerContacts").append(formattedGithub);

   var twitter = bio.contacts.twitter;
   var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
   $("#topContacts").append(formattedTwitter);
   $("#footerContacts").append(formattedTwitter);

   var _location = bio.contacts.location;
   var formattedLocation = HTMLlocation.replace("%data%", _location);
   $("#topContacts").append(formattedLocation);
   $("#footerContacts").append(formattedLocation);

   var bioPic = bio.bioPic;
   var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
   $("#header").append(formattedBioPic);

   var welcomeMessage = bio.welcomeMessage;
   var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
   $("#header").append(formattedWelcomeMessage);
//Skills loop
   if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(skills) {
       var formattedSkill = HTMLskills.replace("%data%",skills);
       $("#skills").append(formattedSkill);
     });
   }
 };

//Calling Biography Function
bio.display();

//Work Info Function
work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

     var formattedEmployerTitle = formattedEmployer + formattedTitle;
     $(".work-entry:last").append(formattedEmployerTitle);

     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
     $(".work-entry:last").append(formattedDates);

     var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
     $(".work-entry:last").append(formattedLocation);

     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description)
     $(".work-entry:last").append(formattedDescription);
   }
  }

//Call Work Function
work.display();

//Function for Projects
  projects.display = function() {
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
        $('.project-entry:last').append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
        $('.project-entry:last').append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedProjectDescription);

        project.images.forEach(function(img) {
            var formattedImage = HTMLprojectImage.replace('%data%', img);
            $('.project-entry:last').append(formattedImage);
        });
    });
};

//Call Project Function
projects.display();

//Education Function
education.display = function() {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $(".education-entry:last").append(formattedName + formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $(".education-entry:last").append(formattedMajor);
  };
    //Start of Online Courses Info and Loop
    for (var i = 0; i < education.onlineCourses.length; i++) {
      $('#education').append(HTMLonlineClasses);

      $("#education").append(HTMLschoolStart);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      $(".education-entry:last").append(formattedTitle + formattedSchool);
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url)
      $(".education-entry:last").append(formattedUrl);
    }
  }

//Call Education Function
education.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

//Change last name to all upper case
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
//Button to change last name to all upper case
$("#main").append(internationalizeButton);
//Display Google Map
$("#mapDiv").append(googleMap);
