const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.offsetHeight;

if(pageYOffset >= sectionTop - 300 && pageYOffset < sectionTop + sectionHeight - 300){

currentSection = section.getAttribute("id");

}

});


navLinks.forEach(link => {

link.classList.remove("active");

const href = link.getAttribute("href").replace("#","");


if(
href === currentSection ||
(href === "project1" && currentSection.includes("project"))
){
link.classList.add("active");
}

});

});
