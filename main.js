// Mobile menu
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const link = document.querySelectorAll('.link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  links.classList.toggle('show-links');
});

link.forEach((linkItem) => {
  linkItem.addEventListener('click', () => {
    hamburger.classList.remove('active');
    links.classList.remove('show-links');
  });
});

// Display work section dynamically
const featuredData = [
  {
    mobileImg: 'images/work/mobile-work.png',
    desktopImg: 'images/work/desktop-work.png',
    title: 'Multi-Post Stories',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a standard dummy text.`,
    languages: ['css', 'html', 'bootstrap', 'ruby'],
  },
];

const firstCard = [
  {
    mobileImg: 'images/work/card-image.png',
    desktopImg: 'images/work/desk-card-images/cardImg1.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'professional art printing data',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'ruby'],
  },
];

const cardData = [
  {
    mobileImg: 'images/work/card-image.png',
    desktopImg: 'images/work/desk-card-images/cardImg2.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'data dashboard healthcare',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'ruby'],
  },
  {
    mobileImg: 'images/work/card-image.png',
    desktopImg: 'images/work/desk-card-images/cardImg3.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'website portfolio',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'ruby'],
  },
  {
    mobileImg: 'images/work/card-image.png',
    desktopImg: 'images/work/desk-card-images/cardImg4.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'professional art printing data more',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'ruby'],
  },
  {
    mobileImg: 'images/work/card-image.png',
    desktopImg: 'images/work/desk-card-images/cardImg5.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'data dashboard healthcare',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'ruby'],
  },
  {
    mobileImg: 'images/work/card-image.png',
    desktopImg: 'images/work/desk-card-images/cardImg6.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'website portfolio',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['html', 'bootstrap', 'ruby'],
  },
];

const featuredWork = document.querySelector('.featured-work');
const gridContainer = document.querySelector('.grid-container');

// Load featured-work
const displayFeaturedWork = (array) => {
  const featuredWorkString = array.map((feature) => `<div class="mobile-gym"><img  src=${feature.mobileImg} alt="Gymfit image"></div>
    <div class="desktop-gym"><img  src=${feature.desktopImg} alt="Gymfit image"></div>
    <div class="right-block">
        <h2 class="title">${feature.title}</h2>
        <p class="para">
        ${feature.desc}
        </p>
        
        <ul class="langs">
            ${feature.languages.map((lang) => `<li class="lang"><a href="#">${lang}</a></li>`)
    .join('')}
        </ul>
        
        <div class="btn-center">
            <button class="btn see-project button" >
                see project
            </button>
        </div>
    </div>`)
    .join('');
  featuredWork.innerHTML = featuredWorkString;
};

// Load first card
const displayCardOne = (array) => {
  const cardOne = array.map((card) => `<div class="grid-item">
    <div class="card-img">
        <img class="mob-img" src=${card.mobileImg} alt="Work card image">
        <img class="desk-img" src=${card.desktopImg} alt="Work card image">
    </div>
    <div class="card-content">
        <div class="card-text hide-text">
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
                    ${card.tags.map((tag) => `<li class="lang"><a href="#">${tag}</a></li>`)
    .join('')}
                </ul>
            </div>
        </div>
        <div>
            <button class="card-btn see-project button" >
                see project
            </button>
        </div>
    </div>
</div>`)
    .join('');
  gridContainer.innerHTML = cardOne;
};

// Load the rest of the cards
const displayCardString = (array) => {
  const cardString = array.map((card) => `<div class="grid-item">
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
                ${card.tags.map((tag) => `<li class="lang"><a href="#">${tag}</a></li>`)
    .join('')} 
                </ul>
            </div>
        </div>
        <div>
            <button class="card-btn see-project button hide-btn" >
                see project
            </button>
        </div>
    </div>
</div>`)
    .join('');
  gridContainer.innerHTML += cardString;
};

// Popup window
const modalPopup = () => {
  const projectBtns = document.querySelectorAll('.see-project');
  const containers = document.querySelectorAll('.container');
  const myModal = document.querySelector('.modal-overlay');
  const closeBtn = document.querySelector('.close-btn');

  // Show modal
  projectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      myModal.classList.add('show-modal');
      containers.forEach((container) => {
        container.classList.add('blur');
      });
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    myModal.classList.remove('show-modal');
    containers.forEach((container) => {
      container.classList.remove('blur');
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  displayFeaturedWork(featuredData);
  displayCardOne(firstCard);
  displayCardString(cardData);
  modalPopup();
});

// FORM VALIDATION
const form = document.getElementById('form');
const email = document.getElementById('email');
const span = document.querySelector('.span');
const userName = document.getElementById('name');
const message = document.getElementById('message');

// Function that validates email address
const validMail = (usermail) => {
  if (usermail.match(/^([a-z0-9.-]+)+@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/)) {
    return true;
  }
  return false;
};

// Event listener for email validation
form.addEventListener('submit', (e) => {
  if (!validMail(email.value)) {
    e.preventDefault();
    span.textContent = 'Please enter a valid email';
  } else {
    span.textContent = '';
  }
});

// LOCAL STORAGE

// Retrieve from localStorage
window.addEventListener('DOMContentLoaded', ()=> {
  const userInput = JSON.parse(localStorage.getItem('data'));
console.log(userInput)
  if(userInput !== null) {
    userName.value = userInput.nameID;
    email.value = userInput.mail;
    message.value = userInput.msg;
  } else {
    userName.value = '';
    email.value = '';
    message.value = '';
  }
});

// Add to localStorage
form.addEventListener('input', ()=> {
  let object = {};
  object.nameID = userName.value;
  object.mail = email.value;
  object.msg = message.value;

  localStorage.setItem('data', JSON.stringify(object));
});