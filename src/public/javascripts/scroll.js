const nav = document.querySelector("nav");
const section = document.querySelector("#home");

const sectionOptions = {
  rootMargin: "-95% 0px 0px 0px",
};

const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("navbar-scroll");
    } else {
      nav.classList.remove("navbar-scroll");
    }
  });
}, sectionOptions);

sectionObserver.observe(section);
