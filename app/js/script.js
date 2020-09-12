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
}

const fetchProjects = async(cardsList)=>{
await fetch('projects.json')
.then(data => data.json())
.then(data => renderProjectsCards(data, cardsList))
.catch(err => console.log(err))
}
const renderProjectsCards = (projectsArray, cardsList) => {
  let str = ""
  for(key in projectsArray){
    let card = `
    <div class="card flex flex-col jc-sb">
      <div class="card-head flex jc-end">
        <a href="${projectsArray[key].github_url}" title="GitHub repo"><i class="fab fa-github"></i></a>
        <a href="${projectsArray[key].live}" title="Visit Link"><i class="fa fa-external-link-alt"></i></a>
      </div>
      <div class="card-body">
        <h3>${key}</h3>
        <p>${projectsArray[key].description}</p>
      </div>
      <div class="card-footer technologies flex jc-sa">${projectsArray[key].tags.map(tag => '<span>'+tag+'</span>').join('')}</div>
    </div>
    `
    str += card;
  }
  cardsList.innerHTML = str;
}


window.onload = () => {
  const themeToggler = document.querySelector("#theme__toggler");
  const closeAside = document.querySelector("#close__aside");
  const aside = document.querySelector("#navbar__mobile");
  const navbarHamburger = document.querySelector(".navbar__hamburger");

  const cardsList = document.querySelector("#cards-list");
  const body = document.body;

  fetchProjects(cardsList);

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

  // if ("serviceWorker" in navigator) {
  //   // register service worker
  //   navigator.serviceWorker.register("/service-worker.js");
  // }
};
