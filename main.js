// Mobile menu
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const link = document.querySelectorAll(".link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  links.classList.toggle("show-links");
});

link.forEach((linkItem) => {
  linkItem.addEventListener("click", () => {
    hamburger.classList.remove("active");
    links.classList.remove("show-links");
  });
});

// Display work section dynamically
const featuredData = [
  {
    id: "7",
    mobileImg: "images/work/sleekdine-mob.png",
    desktopImg: "images/work/sleekdine-desk.png",
    popupImg: "images/work/sleekdine-desk.png",
    mobileTitle: "Restaurant Table Reservation",
    deskTitle: "Restaurant Table Reservation",
    title: "Restaurant Table Reservation",
    desc: `A full-stack app that allows users to log 
    in, browse, reserve, and manage table reservations, 
    enhancing their dining experience. The app utilizes 
    a Rails API to provide data.`,
    popupDesc: `A full-stack app that allows users to log 
    in, browse, reserve, and manage table reservations, 
    enhancing their dining experience. The app utilizes 
    a Rails API to provide data.`,
    languages: ["react", "redux", "javascript", "rails"],
    popTech: ["Rails", "React", "Redux", "JavaScript"],
    seeLive: "https://book-reservation-h17l.onrender.com/",
    seeSource: "https://github.com/george827/Book-reservation-Front_End",
  },
];

const cardData = [
  {
    id: "1",
    mobileImg: "images/work/desk-card-images/project1.jpg",
    desktopImg: "images/work/desk-card-images/project1.jpg",
    popupImg: "images/work/desk-card-images/awesome-pop.jpg",
    mobileTitle: "Awesome Books",
    deskTitle: "Awesome Books",
    desc: `Awesome books is a simple website that displays a list 
    of books and allows a user to add and remove books from that list`,
    popupDesc: `Awesome books is a simple website that displays a list 
    of books and allows a user to add and remove books from that list`,
    tags: ["html", "css", "javascript"],
    popTech: ["JavaScript", "CSS", "HTML"],
    seeLive: "https://willy836.github.io/Awesome-Books/",
    seeSource: "https://github.com/willy836/Awesome-Books",
  },
  {
    id: "2",
    mobileImg: "images/work/desk-card-images/project2.jpg",
    desktopImg: "images/work/desk-card-images/project2.jpg",
    popupImg: "images/work/desk-card-images/todo-pop.jpg",
    mobileTitle: "To Do List",
    deskTitle: "To Do List",
    desc: `An app that helps users to organize their day. It lists the 
    things that need to be done and allows users to mark them as complete`,
    popupDesc: `This is an app that allow users to add a list of tasks 
    that they plan to complete. Once the tasks have been completed, 
    the user can mark them as complete and remove them from the list. Built with JavaScript.`,
    tags: ["html", "css", "javascript"],
    popTech: ["JavaScript", "CSS", "HTML"],
    seeLive: "https://willy836.github.io/To-Do-List/",
    seeSource: "https://github.com/willy836/To-Do-List",
  },
  {
    id: "3",
    mobileImg: "images/work/desk-card-images/leaderboard.jpg",
    desktopImg: "images/work/desk-card-images/leaderboard.jpg",
    popupImg: "images/work/desk-card-images/leaderboard-pop.jpg",
    mobileTitle: "Leaderboard",
    deskTitle: "Leaderboard",
    desc: `The Leaderboard app displays scores submitted by different players. 
    It also allows users to submit their score`,
    popupDesc: `This app allows a user to submit their score. It also shows 
    scores previously submitted by other players. All data is preserved by 
    the external leaderboard API service`,
    tags: ["html", "css", "javascript"],
    popTech: ["API", "JavaScript", "CSS", "HTML"],
    seeLive: "https://willy836.github.io/Leaderboard/",
    seeSource: "https://github.com/willy836/Leaderboard",
  },
  {
    id: "4",
    mobileImg: "images/work/desk-card-images/calc.jpg",
    desktopImg: "images/work/desk-card-images/calc.jpg",
    popupImg: "images/work/desk-card-images/math-pop.jpg",
    mobileTitle: "Math magicians",
    deskTitle: "Math magicians",
    desc: `This is a Single Page App (SPA) that allows users to: - Make simple 
    calculations - Read a random math-related quote`,
    popupDesc: `Math Magicians is an app for all fans of mathematics. 
    It is a Single Page App (SPA) that allows users to: - Make simple 
    calculations - Read a random math-related quote`,
    tags: ["react", "javascript", "css"],
    popTech: ["React", "JavaScript"],
    seeLive: "https://math-magicians-tfgn.onrender.com/Calculator",
    seeSource: "https://github.com/willy836/Math-Magicians",
  },
  {
    id: "5",
    mobileImg: "images/work/desk-card-images/bookstore.jpg",
    desktopImg: "images/work/desk-card-images/bookstore.jpg",
    popupImg: "images/work/desk-card-images/bookstore-pop.jpg",
    mobileTitle: "Bookstore",
    deskTitle: "Bookstore",
    desc: "This is an app that allows a user to add a book, display a list of books, and remove a selected book",
    popupDesc: `This is an app that allows a user to add a book, display a list of books, and remove a selected book. 
      All data is preserved by the external Bookstore API service`,
    tags: ["react", "redux", "javascript"],
    popTech: ["API", "React", "Redux", "JavaScript"],
    seeLive: "https://bookstore-app-willy836.netlify.app/",
    seeSource: "https://github.com/willy836/Bookstore",
  },
  {
    id: "6",
    mobileImg: "images/work/desk-card-images/metrics-app.jpg",
    desktopImg: "images/work/desk-card-images/metrics-app.jpg",
    popupImg: "images/work/desk-card-images/metrics-pop.jpg",
    mobileTitle: "Metrics web App",
    deskTitle: "Metrics web App",
    desc: `This is a web app that allows users to see and 
    compare metrics from different companies. Companies data is provided by Finacial Modelling Prep API`,
    popupDesc: `This is a web(mobile-focused) app that allows users to see and 
    compare live metrics from different companies. Companies data is provided by Finacial Modelling Prep API.`,
    tags: ["react", "redux", "javascript"],
    popTech: ["API", "React", "Redux", "JavaScript"],
    seeLive: "https://react-capstone-willy836.netlify.app/",
    seeSource: "https://github.com/willy836/React-Capstone",
  },
];

const featuredWork = document.querySelector(".featured-work");
const gridContainer = document.querySelector(".grid-container");

// Load featured-work
const displayFeaturedWork = (array) => {
  const featuredWorkString = array
    .map(
      (feature) => `<div class="mobile-gym"><img  src=${
        feature.mobileImg
      } alt="Gymfit image"></div>
    <div class="desktop-gym"><img  src=${
      feature.desktopImg
    } alt="Gymfit image"></div>
    <div class="right-block">
        <h2 class="title">${feature.title}</h2>
        <p class="para">
        ${feature.desc}
        </p>
        
        <ul class="langs">
            ${feature.languages
              .map((lang) => `<li class="lang"><a href="#">${lang}</a></li>`)
              .join("")}
        </ul>
        
        <div class="btn-center">
            <button class="btn  button see-featured" data-id=${feature.id} >
                see project
            </button>
        </div>
    </div>`
    )
    .join("");
  featuredWork.innerHTML = featuredWorkString;
};

// Load work section cards
const displayCardString = (array) => {
  const cardString = array
    .map(
      (card) => `<div class="grid-item">
    <div class="card-img">
        <img class="mob-img" src=${card.mobileImg} alt="Work card image">
        <img class="desk-img" src=${card.desktopImg} alt="Work card image">
    </div>
    <div class="card-content">
        <div class="card-text">
            <div class="card-title">
                <p class="mobile-para">${card.mobileTitle}</p>
                <p class="desktop-para">${card.deskTitle}</p>
            </div>
            <div class="card-desc">
                <p>
                    ${card.desc}
                </p>
            </div>
            <div>
                <ul class="tags">
                ${card.tags
                  .map((tag) => `<li class="lang"><a href="#">${tag}</a></li>`)
                  .join("")} 
                </ul>
            </div>
        </div>
        <div>
            <button class="card-btn see-project button " data-id=${card.id} >
                see project
            </button>
        </div>
    </div>
</div>`
    )
    .join("");
  gridContainer.innerHTML = cardString;
};

// Featured popoup
const featuredModal = () => {
  const seeProjectBtn = document.querySelector(".see-featured");
  const containers = document.querySelectorAll(".container");
  const myModal = document.querySelector(".modal-overlay");

  seeProjectBtn.addEventListener("click", (e) => {
    const featuredId = e.target.dataset.id;

    const targetProj = featuredData.filter((proj) => {
      if (proj.id === featuredId) {
        return proj;
      }
      return false;
    });
    const displayFeatured = targetProj
      .map((item) => {
        return `<div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            <span class="close-btn">&times;</span>
            <p class="mobile-heading">${item.mobileTitle}</p>
            <p class="desktop-heading">
              ${item.deskTitle}
            </p>
          </div>
          <div class="modal-tags">
            <ul>
              
              ${item.popTech
                .map(
                  (tech) => `<li class="modal-tag"><a href="">${tech}</a></li>`
                )
                .join("")}
            </ul>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-imgM">
            <img
              class="modal-image feature-modal-img"
              src=${item.popupImg}
              alt="Modal mobile image"
            />
          </div>
          <div class="modal-imgD">
            <img
              class="modal-image feature-modal-img"
              src=${item.popupImg}
              alt="Modal desktop image"
            />
          </div>
          <div class="modal-text">
            <p class="modal-descM">
              ${item.popupDesc}
            </p>
            <p class="modal-descD">
              ${item.popupDesc}
              
            </p>
            <div class="modal-btns">
              <button>
                <a class="modal-btn" href=${
                  item.seeLive
                } target="_blank">See Live</a>
                <img
                  class="modal-btn-img"
                  src="images/modal/live-icon.png"
                  alt="See Live Image"
                />
              </button>
              <button>
                <a class="modal-btn" href=${
                  item.seeSource
                } target="_blank">See Source</a>
                <img
                  class="modal-btn-img"
                  src="images/modal/github-icon.png"
                  alt="See Source Github Image"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      })
      .join("");

    myModal.innerHTML = displayFeatured;
    myModal.classList.add("show-modal");
    containers.forEach((container) => {
      container.classList.add("blur");
    });

    // Close modal
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      myModal.classList.remove("show-modal");
      containers.forEach((container) => {
        container.classList.remove("blur");
      });
    });
  });
};

// Popup window
const modalPopup = () => {
  const projectBtns = document.querySelectorAll(".see-project");
  const containers = document.querySelectorAll(".container");
  const myModal = document.querySelector(".modal-overlay");

  // Show modal
  projectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const projID = e.target.dataset.id;

      const targetProj = cardData.filter((proj) => {
        if (proj.id === projID) {
          return proj;
        }
        return false;
      });
      const displayProject = targetProj
        .map(
          (item) => `<div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <span class="close-btn">&times;</span>
              <p class="mobile-heading">${item.mobileTitle}</p>
              <p class="desktop-heading">
                ${item.deskTitle}
              </p>
            </div>
            <div class="modal-tags">
              <ul>
                
                ${item.popTech
                  .map(
                    (tech) =>
                      `<li class="modal-tag"><a href="">${tech}</a></li>`
                  )
                  .join("")}
              </ul>
            </div>
          </div>
          <div class="modal-body">
            <div class="modal-imgM">
              <img
                class="modal-image"
                src=${item.popupImg}
                alt="Modal mobile image"
              />
            </div>
            <div class="modal-imgD">
              <img
                class="modal-image"
                src=${item.popupImg}
                alt="Modal desktop image"
              />
            </div>
            <div class="modal-text">
              <p class="modal-descM">
                ${item.popupDesc}
              </p>
              <p class="modal-descD">
                ${item.popupDesc}
                
              </p>
              <div class="modal-btns">
                <button>
                  <a class="modal-btn" href=${
                    item.seeLive
                  } target="_blank">See Live</a>
                  <img
                    class="modal-btn-img"
                    src="images/modal/live-icon.png"
                    alt="See Live Image"
                  />
                </button>
                <button>
                  <a class="modal-btn" href=${
                    item.seeSource
                  } target="_blank">See Source</a>
                  <img
                    class="modal-btn-img"
                    src="images/modal/github-icon.png"
                    alt="See Source Github Image"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`
        )
        .join("");
      myModal.innerHTML = displayProject;

      myModal.classList.add("show-modal");
      containers.forEach((container) => {
        container.classList.add("blur");
      });

      // Close modal
      const closeBtn = document.querySelector(".close-btn");
      closeBtn.addEventListener("click", () => {
        myModal.classList.remove("show-modal");
        containers.forEach((container) => {
          container.classList.remove("blur");
        });
      });
    });
  });
};

window.addEventListener("DOMContentLoaded", () => {
  displayFeaturedWork(featuredData);
  displayCardString(cardData);
  modalPopup();
  featuredModal();
});

// FORM VALIDATION//
const form = document.querySelector(".form");
const email = document.querySelector(".email");
const span = document.querySelector(".span");
const userName = document.getElementById("name");
const message = document.getElementById("message");

// Function that validates email address
const validMail = (usermail) => {
  if (
    usermail.match(/^([a-z0-9.-]+)+@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/)
  ) {
    return true;
  }
  return false;
};

// Event listener for email validation
form.addEventListener("submit", (e) => {
  if (!validMail(email.value)) {
    e.preventDefault();
    span.textContent = "Please enter a valid email";
  } else {
    span.textContent = "";
  }
});

// LOCAL STORAGE

// Retrieve from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const userInput = JSON.parse(localStorage.getItem("data"));

  if (userInput !== null) {
    userName.value = userInput.nameID;
    email.value = userInput.mail;
    message.value = userInput.msg;
  } else {
    userName.value = "";
    email.value = "";
    message.value = "";
  }
});

// Add to localStorage
form.addEventListener("input", () => {
  const object = {};
  object.nameID = userName.value;
  object.mail = email.value;
  object.msg = message.value;

  localStorage.setItem("data", JSON.stringify(object));
});
