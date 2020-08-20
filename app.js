const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

const navBackground = () => {
  const nav = document.getElementsByTagName("nav")[0];

  window.addEventListener("scroll", () => {
    this.scrollY > 600
      ? nav.classList.add("is-solid")
      : nav.classList.remove("is-solid");
  });
};

navSlide();
navBackground();
