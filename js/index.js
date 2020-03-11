/**/ 
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const nav = document.querySelectorAll("nav a");
nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

nav.forEach(banana => banana.style.color ='green');

const newNavItem1 = document.createElement('a');
const newNavItem11 = document.querySelector('nav');
newNavItem1.textContent = 'reviews';
newNavItem11.prepend(newNavItem1);
newNavItem1.style.color = 'green';

const newNavItem2 = document.createElement('a');
const newNavItem22 = document.querySelector('nav');
newNavItem2.innerText = 'Whose Idea Was This';
newNavItem22.appendChild(newNavItem2);
newNavItem2.style.color = 'green';
// const newATag1 = document.createElement('a')
// const mainNav = document.querySelector('nav')
// newATag1.innerText = 'Reviews'
// newATag1.href = '#'
// mainNav.prepend(newATag1)
// newATag1.style.color = 'green'



const cta = document.querySelector('h1');
cta.textContent = siteContent.cta.h1; 

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent.cta['img-src']);

const mainContent = document.querySelectorAll('.main-content h4');
mainContent[0].textContent = siteContent['main-content']['features-h4']
mainContent[1].textContent = siteContent['main-content']['about-h4']
mainContent[2].textContent = siteContent['main-content']['services-h4']
mainContent[3].textContent = siteContent['main-content']['product-h4']
mainContent[4].textContent = siteContent['main-content']['vision-h4']

const sectionContent = document.querySelectorAll('.main-content p');
sectionContent[0].textContent = siteContent['main-content']['features-content']
sectionContent[1].textContent = siteContent['main-content']['about-content']
sectionContent[2].textContent = siteContent['main-content']['services-content']
sectionContent[3].textContent = siteContent['main-content']['product-content']
sectionContent[4].textContent = siteContent['main-content']['vision-content']


const midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contact = document.querySelector('.contact');

contact.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"]
contact.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"]
contact.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"]


const foot = document.querySelector('footer')

foot.innerText = "Copyright Great Idea! 2018"