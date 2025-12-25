// Scroll Animation
document.querySelectorAll(".link").forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("link")) {
      const id = this.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  })
);

// Sticky Nav
// const header = document.querySelector(".header");
// const navBar = document.querySelector(".nav-cont");
// const nav = navBar.getBoundingClientRect().height;
// console.log(nav);

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) navBar.classList.add("sticky");
//   else navBar.classList.remove("sticky");
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${nav}px`,
// });
// console.log(headerObserver);
// headerObserver.observe(header);
