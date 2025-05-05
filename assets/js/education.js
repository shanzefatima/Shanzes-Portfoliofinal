AOS.init();

// MOOCs Cards
const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Extended Reality for Everybody by University of Michigan",
    cardImage: "assets/images/education-page/mich-4.svg",
    moocLink: "https://coursera.org/verify/specialization/VUL5G7DCN64C",
    description: "This course introduces the fundamentals of Extended Reality (XR), including Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR). Learn to design and develop immersive experiences.",
  },
  {
    title: "User Experience Design",
    cardImage: "assets/images/education-page/google1.svg",
    moocLink: "https://coursera.org/verify/GBTTKMTWKCFU",
    description: "Master the principles of User Experience (UX) design, including user research, wireframing, prototyping, and usability testing. Create user-centered designs for digital products.",
  },
  {
    title: "Generative AI Learning",
    cardImage: "assets/images/education-page/aws.svg",
    description: "Explore the world of Generative AI, including techniques like GANs (Generative Adversarial Networks) and their applications in art, music, and content creation.",
  },
  {
    title: "Meta AR Developer, Professional Certificate",
    cardImage: "assets/images/education-page/Meta.svg",
    moocLink: "https://coursera.org/verify/professional-cert/WJ6Y28S3QL24",
    description: "Become a certified AR developer with Meta. Learn to build augmented reality applications using industry-standard tools and frameworks.",
  },
  {
    title: "Creativity & AI, Professional Certificate",
    cardImage: "assets/images/education-page/parsons.svg",
    moocLink: "https://coursera.org/verify/specialization/B658YDMTKMPZ",
    description: "Combine creativity and AI to design innovative solutions. Learn how AI can enhance creative processes in art, design, and storytelling.",
  },
  {
    title: "AI & Law",
    cardImage: "assets/images/education-page/Lund.svg",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
    description: "Understand the intersection of AI and law. Explore ethical, legal, and regulatory challenges posed by AI technologies.",
  },
  {
    title: "Unity and C#",
    cardImage: "assets/images/education-page/Meta.svg",
    moocLink: "https://coursera.org/verify/RZCRPFH9BCQH",
    description: "Learn game development with Unity and C#. Build interactive 2D and 3D games for various platforms.",
  },
  {
    title: "Product Development",
    cardImage: "assets/images/education-page/nyu.svg",
    description: "Discover the process of product development, from ideation to launch. Learn to create products that meet user needs and market demands.",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(({ title, cardImage, moocLink, description }) => {
    output += `        
      <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">  
        <div class="card mb-3 mx-auto">
          <div class="content">
            <div class="content-overlay"></div>
            <img src=${cardImage} class="card-img-top content-image">     
            <div class="content-details fadeIn-bottom">
              <a href="#" data-toggle="modal" data-target="#moocModal" data-title="${title}" data-description="${description}">
                <i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i>
              </a>                                   
            </div>
          </div>
          <div class="card-body">
            <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
          </div>
        </div>
      </div>        
    `;
  });
  moocs.innerHTML = output;

  // Add event listener for modal
  document.querySelectorAll('.content-details a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const title = link.getAttribute('data-title');
      const description = link.getAttribute('data-description');
      document.querySelector('#moocModalLabel').textContent = title;
      document.querySelector('#moocModalBody').textContent = description;
    });
  });
};

document.addEventListener("DOMContentLoaded", showCards);

/* Badges */
const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
        <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
        <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section */
$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 100) {
    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '100px',
      easing: 'ease-in-out',
      duration: 100,
    });
  } else {
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '100px',
      easing: 'ease-in-out',
      duration: 100,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '100px',
      easing: 'ease-in-out',
      duration: 100,
    });
  }

  // JavaScript to add animation class to the logo after a delay
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.querySelector(".nyu-logo").classList.add("animated");
    }, 30); // Adjust the delay (in milliseconds) as needed
  });
});

