"use script";

const sectionHeroEl = document.querySelector(".job-ad-top");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false)
      document.querySelector(".header").classList.add("sticky");

    if (ent.isIntersecting === true) {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-330px",
  }
);

obs.observe(sectionHeroEl);
