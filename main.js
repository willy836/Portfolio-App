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
    mobileImg: "images/work/tidecommerce.png",
    desktopImg: "images/work/tidecommerce.png",
    popupImg: "images/work/tidecommerce.png",
    mobileTitle: "Tide Commerce",
    deskTitle: "Tide Commerce",
    title: "Tide Commerce",
    desc: `This is an online store where users can browse products, 
    add items to a shopping cart, proceed to checkout and make payments.`,
    popupDesc: `This is an online store where users can browse products, 
    add items to a shopping cart, proceed to checkout and make payments.`,
    languages: ["laravel", "react", "typescript"],
    popTech: [
      "PHP",
      "Laravel",
      "MySQL",
      "React",
      "Redux",
      "TypeScript",
      "Tailwind",
    ],
    seeLive: "https://e-commerce-frontend-willy836.vercel.app/",
    seeSource: "https://github.com/willy836/E-Commerce-Frontend.git",
  },
];

const cardData = [
  {
    id: "1",
    mobileImg: "images/work/desk-card-images/reserve-table.png",
    desktopImg: "images/work/desk-card-images/reserve-table.png",
    popupImg: "images/work/desk-card-images/reserve-table-pop.png",
    mobileTitle: "SleekDine",
    deskTitle: "SleekDine",
    desc: `An app that allows a user to register, reserve a table and 
    cancel their reservations at their favorite restaurant.`,
    popupDesc: `An app that allows a user to register, reserve a table and 
    cancel their reservations at their favorite restaurant. 
    The app is powered by a Node.js API backend.`,
    tags: ["node.js", "express", "react"],
    popTech: ["Node.js", "Express", "MongoDB", "React", "Redux", "JavaScript"],
    seeLive: "https://reserve-table.vercel.app/",
    seeSource: "https://github.com/willy836/Reserve-table-API.git",
  },
  {
    id: "2",
    mobileImg: "images/work/desk-card-images/chatinterface.png",
    desktopImg: "images/work/desk-card-images/chatinterface.png",
    popupImg: "images/work/desk-card-images/chatinterface-pop.png",
    mobileTitle: "ChatInterface",
    deskTitle: "ChatInterface",
    desc: `An app that allows users to interact with the bot, view bot responses, 
    and have a basic history of the conversation.`,
    popupDesc: `This is a simple chat interface built using Laravel and integrated 
    with OpenAI. The web app allows users to interact with the bot, view bot 
    responses, and have a basic history of the conversation.`,
    tags: ["PHP", "Laravel", "MySQL"],
    popTech: ["PHP", "Laravel", "MySQL", "Tailwind"],
    seeLive: "https://chatinterface.chickenkiller.com/",
    seeSource: "https://github.com/willy836/ChatInterface.git",
  },
  {
    id: "3",
    mobileImg: "images/work/desk-card-images/metrics-web-app.png",
    desktopImg: "images/work/desk-card-images/metrics-web-app.png",
    popupImg: "images/work/desk-card-images/metrics-pop.png",
    mobileTitle: "Metrics web App",
    deskTitle: "Metrics web App",
    desc: `This is a web app that allows users to see and
    compare metrics from different companies.`,
    popupDesc: `This is a web(mobile-focused) app that allows users to see and
    compare live metrics from different companies. Companies data is provided by 
    Financial Modelling Prep API.`,
    tags: ["react", "redux", "javascript"],
    popTech: ["API", "React", "Redux", "JavaScript", "CSS"],
    seeLive: "https://react-capstone-willy836.netlify.app/",
    seeSource: "https://github.com/willy836/React-Capstone",
  },
  {
    id: "4",
    mobileImg: "images/work/desk-card-images/space-x.png",
    desktopImg: "images/work/desk-card-images/space-x.png",
    popupImg: "images/work/desk-card-images/space-x-pop.png",
    mobileTitle: "Space Travelers' Hub",
    deskTitle: "Space Travelers' Hub",
    desc: `This app allows users to book rockets and join selected space 
    missions. The app utilizes Space-X API to provide real live data.`,
    popupDesc: `A web app for a company that provides space travel services. 
    The app allows users to book rockets and join selected space missions. The app 
    utilizes Space-X API to provide real live data.`,
    tags: ["react", "redux", "javascript"],
    popTech: ["React", "Redux", "JavaScript", "CSS"],
    seeLive: "https://space-travelers-hub-836.netlify.app/",
    seeSource: "https://github.com/harshitajain06/ReactGroupProject",
  },
  {
    id: "5",
    mobileImg: "images/work/desk-card-images/meals-app.png",
    desktopImg: "images/work/desk-card-images/meals-app.png",
    popupImg: "images/work/desk-card-images/meals-app-pop.png",
    mobileTitle: "Meals App",
    deskTitle: "Meals App",
    desc: `An app that allows users to view various meals, comment, like, 
    and get tips on how to prepare them.`,
    popupDesc: `A user-friendly front-end application that allows users to view 
    various meals, comment, like, and get tips on how to prepare them. The app 
    utilizes Meals DB API to provide data.`,
    tags: ["javascript", "css", "html"],
    popTech: ["JavaScript", "CSS3", "HTML5"],
    seeLive: "https://meals-app-js-group-capstone.netlify.app/",
    seeSource: "https://github.com/Tekhlay/JS-GROUP-CAPSTONE-PROJECT",
  },
  {
    id: "6",
    mobileImg: "images/work/desk-card-images/concert.png",
    desktopImg: "images/work/desk-card-images/concert.png",
    popupImg: "images/work/desk-card-images/concert-pop.png",
    mobileTitle: "Theatre Drama Bliss",
    deskTitle: "Theatre Drama Bliss",
    desc: ` A landing page (with home and about pages) for hosting annual drama 
    events with venue, date, and participants.`,
    popupDesc: ` A landing page for hosting annual drama 
    events with venue, date, and participants. The app also provides information about 
    dates and venues where the recent two events were held.`,
    tags: ["javascript", "css", "html"],
    popTech: ["JavaScript", "CSS3", "HTML5"],
    seeLive: "https://willy836.github.io/First-Capstone-Project-Concert-Page/",
    seeSource:
      "https://github.com/willy836/First-Capstone-Project-Concert-Page",
  },
];

const featuredWork = document.querySelector(".featured-work");
const gridContainer = document.querySelector(".grid-container");

// Load featured-work
const displayFeaturedWork = (array) => {
  const featuredWorkString = array
    .map(
      (feature) => `<div class="mobile-gym"><img src=${
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
              class="modal-image modal-img-border"
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
                class="modal-image modal-img-border"
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

// Download Resume
const btnContainer = document.getElementById("resume-btn-container");
const downloadResume = document.getElementById("download-resume");
downloadResume.addEventListener("click", () => {
  const fileUrl =
    "https://docs.google.com/document/d/14E-KmFPIqY7wODigqrfq2qJN6jxftduu_l2lzJk5OtQ/export?format=pdf";
  const filename = "wilson-kimiri-resume.pdf";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = filename;

  btnContainer.appendChild(link);
  link.click();
  btnContainer.removeChild(link);
});
