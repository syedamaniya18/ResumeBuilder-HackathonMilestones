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
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Contact Number:</b>${contact}</p>

    <h2>Education</h2>
    <ol><li>${education}</li></ol>

    <h2>Work Experience</h2>
    <ol><li>${workExperience}</li></ol>

    <h2>Skills</h2>
    <ol><li>${skills}</li></ol>
    `;

    if (ResumeDisplay){
        ResumeDisplay.innerHTML = resumeHtml;
    } else {
        console.error(`The required information is missing`)
    }
});