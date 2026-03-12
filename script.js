const homeLink = document.querySelector('a[href="#home"]');
const workLink = document.querySelector('a[href="#project1"]');
const contactLink = document.querySelector('a[href="#contact"]');

const homeSection = document.getElementById("home");
const project1 = document.getElementById("project1");
const contactSection = document.getElementById("contact");

window.addEventListener("scroll", () => {

const scrollY = window.scrollY;

/* section positions */

const homeTop = homeSection.offsetTop;
const workTop = project1.offsetTop;
const contactTop = contactSection.offsetTop;

/* reset */

homeLink.classList.remove("active");
workLink.classList.remove("active");
contactLink.classList.remove("active");

/* logic */

if(scrollY < workTop - 200){
homeLink.classList.add("active");
}
else if(scrollY >= workTop - 200 && scrollY < contactTop - 200){
workLink.classList.add("active");
}
else{
contactLink.classList.add("active");
}

});