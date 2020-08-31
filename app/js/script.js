window.onload = () => {
  const themeToggler = document.querySelector("#theme__toggler");
  const closeAside = document.querySelector("#close__aside");
  const aside = document.querySelector("#navbar__mobile");
  const navbarHamburger = document.querySelector(".navbar__hamburger");
  const body = document.body;

  themeToggler.addEventListener("click", (e) => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");

      themeToggler.innerHTML = `<i class="fa fa-moon"></i>`;
    } else {
      body.classList.remove("light");
      body.classList.add("dark");

      themeToggler.innerHTML = `<i class="fa fa-sun"></i>`;
    }
  });

  closeAside.addEventListener("click", (e) => {
    aside.classList.add("closed");
  });

  navbarHamburger.addEventListener("click", (e) => {
    aside.classList.remove("closed");
  });
};
