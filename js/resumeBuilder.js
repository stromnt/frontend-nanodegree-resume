var bio = {
    'name': 'Tania',
    'role': 'Java Developer',
    'contacts': {
        'mobile': '029838882',
        'email': 'tania@stromnes.co.za',
        'github': 'stromnt',
        'twitter': '#stromnt',
        'location': '5 Martin Crescent, Westville, South Africa'
    },
    'welcomeMessage': 'Welcome to my home page',
    'skills': ['java', 'C', 'Oracle', 'SAP', 'BW', 'html5', 'css3', 'javascript', 'AngularJS'],
    'biopic': 'images/myProfile.jpg',
    'display': function () {
        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

        //contact details
        $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.githum));
        $('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
        $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        //skills
        $('#header').append(HTMLskillsStart);
        if ( bio.skills && bio.skills.length > 0 ) {
            for ( var skill of bio.skills) {
                $('#skills').append(HTMLskills.replace('%data%', skill));
            }
        }
    }
};
bio.display();

var education = {
    'schools': [{
        'name': 'WGHS',
        'location': '12 Westville Road, Westville, South Africa',
        'degree': 'NSC',
        'majors': ['Maths', 'Physical Science', 'Biology', 'History', 'English', 'Afrikaans'],
        'dates': '1982-1986',
        'url': 'www.wghs.co.za'
    },
    {
        'name': 'UCT',
        'location': 'Rondebosch, Cape Town, South Africa',
        'degree': 'BSc',
        'majors': ['Maths', 'Computer Science'],
        'dates': '1987-1989',
        'url': 'www.uct.ac.za'
    }],
    'onlineCourses': [{
        'title': 'Web Developer',
        'school': 'Udacity',
        'dates': '2016-2017',
        'url': 'www.udacity.com'
    },
    {
        'title': 'Java 8 Lambdas',
        'school': 'Safari Books',
        'dates': '2015',
        'url': 'www.safaribooks.com'
    }],
    'display': function () {
        if ( education.schools && education.schools.length > 0 ) {
            for (var school of education.schools) {
                $('#education').append(HTMLschoolStart);
                var educationentry = HTMLschoolName.replace('%data%', school.name);
                educationentry += HTMLschoolDegree.replace('%data%', school.degree);
                educationentry += HTMLschoolDates.replace('%data%', school.dates);
                educationentry += HTMLschoolLocation.replace('%data%', school.location);
                var majors = '';
                for (var major of school.majors) {
                    majors += major + ' ';
                }
                educationentry += HTMLschoolMajor.replace('%data%', majors);
                $('.education-entry:last').html(educationentry);
            }
        }

        if ( education.onlineCourses && education.onlineCourses.length > 0 ) {
            $('#education').append(HTMLonlineClasses);
            for (var online of education.onlineCourses) {
                $('#education').append(HTMLschoolStart);
                var onlineEntry = HTMLonlineTitle.replace('%data%', online.title);
                onlineEntry += HTMLonlineSchool.replace('%data%', online.school);
                onlineEntry += HTMLonlineDates.replace('%data%', online.dates);
                onlineEntry += HTMLonlineURL.replace('%data%', online.url);
                $('.education-entry:last').html(onlineEntry);
            }
        }
    }
};
education.display();

var work = {
    'jobs': [{
        'employer': 'CHEP',
        'title': 'Senior Java Developer',
        'location': 'Durban, South Africa',
        'dates': '1999-present',
        'description': 'Develop java mid-tier (rest) and backend (jax-ws soap) interfaces between SAP, BW, Siebel and Oracle and company portal.'
    },
    {
        'employer': 'CT Bowring',
        'title': 'Analyst Programmer',
        'location': 'Trinity Square, London, UK',
        'dates': '1995-1995',
        'description': 'Develop mainly C interfaces between core Wang and Insurer desktop systems'
    },
    {
        'employer': 'CG SMITH Sugar',
        'title': 'Analyst Programmer',
        'location': 'Durban, South Africa',
        'dates': '1990-1995',
        'description': 'Developed statictical analytical programs in Fortran and C (X-11 Arima)'
    }],
    'display': function () {
        if ( work.jobs && work.jobs.length > 0 ) {
            for (var job of work.jobs) {
                $('#workExperience').append(HTMLworkStart);
                var workentry = HTMLworkEmployer.replace('%data%', job.employer);
                workentry += HTMLworkTitle.replace('%data%', job.title);
                workentry += HTMLworkDates.replace('%data%', job.dates);
                workentry += HTMLworkLocation.replace('%data%', job.location);
                workentry += HTMLworkDescription.replace('%data%', job.description);
                $('.work-entry:last').html(workentry);
            }
        }
    }
};
work.display();

var projects = {
    'projects': [
    {
        'title': 'Really Awesome Project 1',
        'dates': '1992',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula leo, eleifend finibus enim eget, malesuada ornare nulla. In iaculis, dolor id condimentum porttitor, augue dolor vestibulum ligula, eget tincidunt sem metus vel diam. Maecenas sagittis mauris sed nisl condimentum interdum. Nam interdum nulla et est blandit, eget tempor odio luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt nisl diam, et viverra neque mollis ut. Nunc commodo dignissim elit ac condimentum. Proin dictum efficitur cursus. Vivamus euismod elit nisi, nec pharetra velit tincidunt quis. Nulla tristique fringilla velit eget mollis. Nunc varius nulla a dignissim vulputate. Quisque nec lacinia erat, et vulputate quam.',
        'images': [
        'images/project1.1.jpg',
        'images/project1.2.jpg'
        ]
    },
    {
        'title': 'Change the World - Peace and Tranquility',
        'dates': '1998',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula leo, eleifend finibus enim eget, malesuada ornare nulla. In iaculis, dolor id condimentum porttitor, augue dolor vestibulum ligula, eget tincidunt sem metus vel diam. Maecenas sagittis mauris sed nisl condimentum interdum. Nam interdum nulla et est blandit, eget tempor odio luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt nisl diam, et viverra neque mollis ut. Nunc commodo dignissim elit ac condimentum. Proin dictum efficitur cursus. Vivamus euismod elit nisi, nec pharetra velit tincidunt quis. Nulla tristique fringilla velit eget mollis. Nunc varius nulla a dignissim vulputate. Quisque nec lacinia erat, et vulputate quam.',
        'images': [
        'images/project2.1.jpg'
        ]
    }],
    'display': function () {
        if ( projects.projects && projects.projects.length > 0 ) {
            for (var project of projects.projects) {
                $('#projects').append(HTMLprojectStart);
                var projectentry = HTMLprojectTitle.replace('%data%', project.title);
                projectentry += HTMLprojectDates.replace('%data%', project.dates);
                projectentry += HTMLprojectDescription.replace('%data%', project.description);
                for (var image of project.images) {
                    projectentry += HTMLprojectImage.replace('%data%', image);
                }
                $('.project-entry:last').html(projectentry);
            }
        }
        $('#mapDiv').append(googleMap);
    }
};
projects.display();

// $('body').append(internationalizeButton);

// var inName = function( name) {
//     var names = name.split(' ');
//     return names[0].charAt(0).toUpperCase() + names[0].substring(1) + ' ' + names[1].toUpperCase();
// };
