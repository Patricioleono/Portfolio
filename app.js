const home = document.querySelector("#home");
const homeTarget = document.querySelector("#homeTarget");
const project = document.querySelector("#project");
const projectTarget = document.querySelector("#projectTarget");
const about = document.querySelector("#about");
const aboutTarget = document.querySelector("#aboutTarget");
const skills = document.querySelector("#skills");
const skillTarget = document.querySelector("#skillTarget");
const contact = document.querySelector("#contact");
const contactTarget = document.querySelector("#contactTarget");

const gitProject1 = document.querySelector("#git-project1");
const previewProject1 = document.querySelector("#preview-project1");

const seeCV = document.querySelector("#seeCV");

//Curriculum Links
seeCV.addEventListener("click", () => {
    location.href = "https://resume.io/r/J03XyqQPv"
})

//Redireccion
gitProject1.addEventListener("click", () => {
    location.href = "https://github.com/Patricioleono/Memory-Game";
});
previewProject1.addEventListener("click", () => {
    location.href = "https://pair-chose.netlify.app/";
});

//scroll to target
home.addEventListener("click", () => {
    homeTarget.scrollIntoView({
        behavior: "smooth",
    });
});

project.addEventListener("click", () => {
    projectTarget.scrollIntoView({
        behavior: "smooth",
    });
});

about.addEventListener("click", () => {
    aboutTarget.scrollIntoView({
        behavior: "smooth",
    });
});
skills.addEventListener("click", () => {
    skillTarget.scrollIntoView({
        behavior: "smooth",
    });
});
contact.addEventListener("click", () => {
    contactTarget.scrollIntoView({
        behavior: "smooth",
    });
});