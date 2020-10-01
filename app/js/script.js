const openWork = (evt, place) => {
  var i, x, tablinks;
  x = document.getElementsByClassName("work-experience");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("work-nav-link");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(place).style.display = "block";
  evt.currentTarget.className += " active";
};

const fetchProjects = async (cardsList) => {
  await fetch("projects.json")
    .then((data) => data.json())
    .then((data) => renderProjectsCards(data, cardsList))
    .catch((err) => console.log(err));
};
const renderProjectsCards = (projectsArray, cardsList) => {
  let str = "";
  for (key in projectsArray) {
    let card = `
    <div class="card flex flex-col jc-sb" id="card">
      <div class="card-head flex jc-end">
        <a href='${!!projectsArray[key].github_url ? projectsArray[key].github_url : "#"}' title="GitHub repo" target="_blank">${!!projectsArray[key].github_url ? `<i class="fab fa-github"></i>` : ""}</a>
        <a href='${!!projectsArray[key].live ? projectsArray[key].live : "#"}' title="Visit Link" target="_blank">${!!projectsArray[key].live ? `<i class="fa fa-external-link-alt"></i>` : ""}</a>
      </div>
      <div class="card-body">
        <a href="${projectsArray[key].live}" target="_blank"><h3>${key}</h3></a>
        <p>${projectsArray[key].description}</p>
      </div>
      <div class="card-footer technologies flex jc-sa">${projectsArray[key].tags.map((tag) => "<span>" + tag + "</span>").join("")}</div>
    </div>
    `;
    str += card;
  }
  cardsList.innerHTML = str;
};

const hideLoader = () => {
  const loader = document.querySelector(".loader");
  const body = document.body;

  body.style.overflowY = "scroll";
  loader.classList.add("hidden");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
};

window.onload = () => {
  const themeToggler = document.querySelector("#theme__toggler");
  const closeAside = document.querySelector("#close__aside");
  const aside = document.querySelector("#navbar__mobile");
  const navbarHamburger = document.querySelector(".navbar__hamburger");

  const cardsList = document.querySelector("#cards-list");
  const body = document.body;

  fetchProjects(cardsList);
  hideLoader();

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

  const mainNavLinks = document.querySelectorAll("nav ul li a");
  const mainSections = document.querySelectorAll("main section");
  const mobileNavs = document.querySelectorAll('header .navbar .navbar__mobile .link');
  const header = document.querySelector("header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", (event) => {
    let fromTop = window.scrollY;
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.top = "-67px";
      aside.style.top = "67px";
    } else {
      header.style.top = "0";
      aside.style.top = "0";
    }
    lastScrollTop = scrollTop;
    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
    mobileNavs.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  mainNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      let target = document.querySelector(event.target.hash);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
  mobileNavs.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      let target = document.querySelector(event.target.hash);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      aside.classList.add("closed");
    });
  });

  // if ("serviceWorker" in navigator) {
  //   // register service worker
  //   navigator.serviceWorker.register("/service-worker.js");
  // }
};
