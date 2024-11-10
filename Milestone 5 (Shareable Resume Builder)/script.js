var Form = document.getElementById("form");
var ResumeDisplay = document.getElementById("display-resume");
var shareable = document.getElementById("Shareable");
var Shareablelink = document.getElementById("Shareable-link");
var downloadButton = document.getElementById("download-Resume");
Form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username")
        .value;
    var name = document.getElementById("Personal-Info")
        .value;
    var email = document.getElementById("Email").value;
    var contact = document.getElementById("Contact")
        .value;
    var workExperience = document.getElementById("Experience").value;
    var education = document.getElementById("Education").value;
    var skills = document.getElementById("Skill")
        .value;
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        workExperience: workExperience,
        education: education,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHtml = "<h1><b>RESUME<b></h2>\n    <hr>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact Number:</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n\n    <hr>\n    <h2>Education</h2>\n    <p><span contenteditable=\"true\" >").concat(education, "</span></p>\n\n    <hr>\n    <h2>Work Experience</h2>\n    <p><span contenteditable=\"true\">").concat(workExperience, "</span></p>\n\n    <hr>\n    <h2>Skills</h2>\n    <p><span contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
    if (ResumeDisplay) {
        ResumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("The required information is missing");
    }
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareable.style.display = "block";
    Shareablelink.href = shareableURL;
    Shareablelink.textContent = shareableURL;
});
downloadButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('Personal-Info').value =
                resumeData.name;
            document.getElementById('Email').value =
                resumeData.email;
            document.getElementById('Contact').value =
                resumeData.phone;
            document.getElementById('Education').value =
                resumeData.education;
            document.getElementById('Experience').value
                = resumeData.experience;
            document.getElementById('Skill').value =
                resumeData.skills;
        }
    }
});
