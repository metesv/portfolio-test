import "./main.scss";

const PROGRAMMING_LANGUAGES = ["HTML","CSS", "JavaScript", "Java"];

const main = document.createElement('main');
const rowDiv = document.createElement('div');
const aside = document.createElement('aside');
const section = document.createElement('section');
const aboutMeHeader = document.createElement('h3');
const resumeHeader = document.createElement('h2');
const aboutMeParagraph = document.createElement('p');
const skillList = document.createElement('ul');

main.classList.add('container');
document.body.appendChild(main);

rowDiv.classList.add('row');
main.appendChild(rowDiv);

aside.classList.add('col-md-4', 'about-me');
rowDiv.appendChild(aside);

section.classList.add('col-md-8', 'resume');
rowDiv.appendChild(section);

aboutMeHeader.textContent = "About Me";
aside.appendChild(aboutMeHeader);

resumeHeader.textContent = "Resume";
section.appendChild(resumeHeader);

aboutMeParagraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
aside.appendChild(aboutMeParagraph);

section.appendChild(skillList);

PROGRAMMING_LANGUAGES.forEach(language => {
  console.log(language);
  const li = document.createElement('li');
  li.textContent = language;
  skillList.appendChild(li);
})
