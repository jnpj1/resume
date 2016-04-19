/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="pop-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="pop-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="pop-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="pop-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="pop-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="pop-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="pop-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkURL = '<a href="%data%" target="_blank">';
var HTMLworkEmployer = '%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectURL = '<a href="%data%" target="_blank">';
var HTMLprojectTitle = '%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolURL = '<a href="%data%" target="_blank">'
var HTMLschoolName = '%data%';
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<p>Major: %data%</p>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineStart = '<div class="online-entry"></div>'
var HTMLonlineURL = '<a href="%data%" target="_blank">';
var HTMLonlineTitle = '%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';

var HTMLconnectEmail = '<li class="email-icon"><a href="mailto:%data%" target="_blank"><iron-icon icon="communication:email"></iron-icon></a></li>'
var HTMLconnectPhone = '<li class="phone-icon"><a href="tel:+1-%data%"><iron-icon icon="communication:call"></iron-icon></a></li>'
var HTMLconnectSkype = '<li><div id="SkypeButton_Call_echo123_1"><script type="text/javascript">Skype.ui({"name": "call","element": "SkypeButton_Call_echo123_1","participants": ["%data%"],"imageColor": "white","imageSize": 24});</script></div></li>'

var googleMap = '<div id="map"></div>';


// Code for logging click locations
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});


// Code for map
var map;    

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {

    var locations = [];

    locations.push(bio.contacts.location);

    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  var infoWindow = new google.maps.InfoWindow();

  function createMapMarker(placeData) {
    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var HTMLcontent = "<div id='info-window'>" + name + "<div>";

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(HTMLcontent);
      infoWindow.open(map, marker);
     });



    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}


// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
