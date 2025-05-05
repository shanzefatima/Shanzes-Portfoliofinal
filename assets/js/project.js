AOS.init();

/* Project Cards */
const projectcards = document.querySelector(".projectcards");

// Array of objects for projects
const projects = [
  {
    title: "A 3D DATA FOREST OF COVID-19'S IMPACT IN SOUTH ASIA",
    cardImage: "assets/images/project-page/02.jpg",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://medium.com/@sj3802/the-covid-19-data-forest-data-visualization-of-the-pandemics-global-impact-35ca0b206512",
  },
  {
    title: "Sustainable Energy Management via IoT — Implementation",
    cardImage: "assets/images/project-page/p3.jpg",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://medium.com/@sj3802/sustainable-energy-management-via-iot-implementation-19887962fa39",
  },
  {
    title: "Digital Product Design: Meal App",
    cardImage: "assets/images/project-page/p8.jpg",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://medium.com/@sj3802/digital-product-design-meal-app-db3d1d6199dd",
  },
  {
    title: "Hyper Market : Grocery Shopping Experience",
    cardImage: "assets/images/project-page/ph.jpg",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://medium.com/@sj3802/hyper-market-redefining-the-online-grocery-shopping-experience-e0bc33cf3636",
  },
  {
    title: "Redesigning Snapchat Interface",
    cardImage: "assets/images/project-page/p6.jpg",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://medium.com/@sj3802/redesigning-snapchat-interface-0135c70069d3",
  },
  {
    title: "Shoot for the Stars - Escape Room For Blind",
    cardImage: "assets/images/project-page/p10.jpg",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://medium.com/@sj3802/designing-shoot-for-the-stars-an-escape-room-experience-for-blind-and-low-vision-players-f8877d03a356",
  },
];

// Function to render project cards
const showCards = () => {
  let output = "";
  projects.forEach((project) => {
    output += `       
      <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
        <div class="wrapper" style="background: url(${project.cardImage}) center / cover no-repeat;">
          <div class="header"></div>
          <div class="data">
            <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${project.Previewlink}" target="_blank">${project.title}</a></h1>
              </div>
              <ul class="menu-content"><br>
                <li><a href="${project.Previewlink}" class="social-icon">Preview</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;
  });
  projectcards.innerHTML = output;
};

// Render project cards when the DOM is loaded
document.addEventListener("DOMContentLoaded", showCards);

// Search functionality
function myFunction() {
  const input = document.getElementById("myInput").value.toUpperCase();
  const skillcard = document.getElementsByClassName("skill-card");
  const title = document.getElementsByClassName("title");

  for (let i = 0; i < title.length; i++) {
    if (title[i].innerHTML.toUpperCase().includes(input)) {
      skillcard[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
    }
  }
}