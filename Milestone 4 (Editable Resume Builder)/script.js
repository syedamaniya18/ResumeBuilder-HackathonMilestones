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
    var resumeHtml = "<h1><b>RESUME<b></h2>\n    <h2>Personal Information</h2>\n    <hr>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact Number:</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n\n    <h2>Education</h2>\n    <hr>\n    <p><span contenteditable=\"true\" >").concat(education, "</span></p>\n\n    <h2>Work Experience</h2>\n    <hr>\n    <p><span contenteditable=\"true\">").concat(workExperience, "</span></p>\n\n    <h2>Skills</h2>\n    <hr>\n    <p><span contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
    if (ResumeDisplay) {
        ResumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("The required information is missing");
    }
});
