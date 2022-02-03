const home = document.querySelector("#home");
const homeTarget = document.querySelector("#homeTarget");
const project = document.querySelector("#project");
const projectTarget = document.querySelector("#projectTarget");
const about = document.querySelector("#about");
const aboutTarget = document.querySelector("#aboutTarget");
const contact = document.querySelector("#contact");
const contactTarget = document.querySelector("#contactTarget");

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
contact.addEventListener("click", () => {
    contactTarget.scrollIntoView({
        behavior: "smooth",
    });
});