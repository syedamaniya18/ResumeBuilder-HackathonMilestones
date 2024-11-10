const Form = document.getElementById ('form') as HTMLFormElement;
const ResumeDisplay = document.getElementById ('display-resume') as HTMLDivElement;

Form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById ('Personal-Info') as HTMLInputElement).value
    const email = (document.getElementById ('Email') as HTMLInputElement).value
    const contact = (document.getElementById ('Contact') as HTMLInputElement).value
    const workExperience = (document.getElementById ('Experience') as HTMLInputElement).value
    const education = (document.getElementById ('Education') as HTMLInputElement).value
    const skills = (document.getElementById ('Skill') as HTMLInputElement).value

    const  resumeHtml = 
    `<h1><b>RESUME<b></h2>
    <h2>Personal Information</h2>
    <hr>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Contact Number:</b><span contenteditable="true">${contact}</span></p>

    <h2>Education</h2>
    <hr>
    <p><span contenteditable="true" >${education}</span></p>

    <h2>Work Experience</h2>
    <hr>
    <p><span contenteditable="true">${workExperience}</span></p>

    <h2>Skills</h2>
    <hr>
    <p><span contenteditable="true">${skills}</span></p>
    `;

    if (ResumeDisplay){
        ResumeDisplay.innerHTML = resumeHtml;
    } else {
        console.error(`The required information is missing`)
    }
});