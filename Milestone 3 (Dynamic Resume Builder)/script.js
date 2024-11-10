var Form = document.getElementById('form');
var ResumeDisplay = document.getElementById('display-resume');
Form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('Personal-Info').value;
    var email = document.getElementById('Email').value;
    var contact = document.getElementById('Contact').value;
    var workExperience = document.getElementById('Experience').value;
    var education = document.getElementById('Education').value;
    var skills = document.getElementById('Skill').value;
    var resumeHtml = "<h1><b>RESUME<b></h2>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Contact Number:</b>").concat(contact, "</p>\n\n    <h2>Education</h2>\n    <ol><li>").concat(education, "</li></ol>\n\n    <h2>Work Experience</h2>\n    <ol><li>").concat(workExperience, "</li></ol>\n\n    <h2>Skills</h2>\n    <ol><li>").concat(skills, "</li></ol>\n    ");
    if (ResumeDisplay) {
        ResumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("The required information is missing");
    }
});
