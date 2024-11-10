const Form = document.getElementById("form") as HTMLFormElement;
const ResumeDisplay = document.getElementById(
  "display-resume"
) as HTMLDivElement;
const shareable = document.getElementById("Shareable") as HTMLDivElement;
const Shareablelink = document.getElementById(
  "Shareable-link"
) as HTMLAnchorElement;
const downloadButton = document.getElementById(
  "download-Resume"
) as HTMLButtonElement;

Form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const name = (document.getElementById("Personal-Info") as HTMLInputElement)
    .value;
  const email = (document.getElementById("Email") as HTMLInputElement).value;
  const contact = (document.getElementById("Contact") as HTMLInputElement)
    .value;
  const workExperience = (
    document.getElementById("Experience") as HTMLTextAreaElement
  ).value;
  const education = (
    document.getElementById("Education") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("Skill") as HTMLTextAreaElement)
    .value;

  const resumeData = {
    name,
    email,
    contact,
    workExperience,
    education,
    skills,
  };
  localStorage.setItem(username, JSON.stringify(resumeData));

  const resumeHtml = 
   `<h1><b>RESUME<b></h2>
    <hr>
    <h2>Personal Information</h2>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Contact Number:</b><span contenteditable="true">${contact}</span></p>

    <hr>
    <h2>Education</h2>
    <p><span contenteditable="true" >${education}</span></p>

    <hr>
    <h2>Work Experience</h2>
    <p><span contenteditable="true">${workExperience}</span></p>

    <hr>
    <h2>Skills</h2>
    <p><span contenteditable="true">${skills}</span></p>
    `;

  if (ResumeDisplay) {
    ResumeDisplay.innerHTML = resumeHtml;
  } else {
    console.error(`The required information is missing`);
  }

  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    username
  )}`;

  shareable.style.display = "block";
  Shareablelink.href = shareableURL;
  Shareablelink.textContent = shareableURL;
});

downloadButton.addEventListener("click", () => {
  window.print();
});

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");

  if(username){
    const savedResumeData = localStorage.getItem(username);

    if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
        (document.getElementById('username') as HTMLInputElement).value =
        username;
        (document.getElementById('Personal-Info') as HTMLInputElement).value =
        resumeData.name;
        (document.getElementById('Email') as HTMLInputElement).value =
        resumeData.email;
        (document.getElementById('Contact') as HTMLInputElement).value =
        resumeData.phone;
        (document.getElementById('Education') as HTMLTextAreaElement).value =
        resumeData.education;
        (document.getElementById('Experience') as HTMLTextAreaElement).value
        = resumeData.experience;
        (document.getElementById('Skill') as HTMLTextAreaElement).value =
        resumeData.skills;
        }
  }

});
