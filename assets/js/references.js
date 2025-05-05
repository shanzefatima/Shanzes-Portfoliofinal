/* Reference Details Table */
// Changes made 03/16/2025:
// Updated references to highlight Product Design skills
const referenceTable = document.querySelector(".pain");

const references = [
    {
        sl1: 1,
        name1: "Sofia Martinez",
        designation1: "UX Designer at Google",
        image1: "assets/images/references-page/reviewphoto6.png",
        message1: "Shanze brings a unique approach to user experience design, combining deep research with an intuitive sense of usability. Her ability to craft engaging, accessible interfaces is truly impressive. During our collaboration, she played a key role in simplifying complex workflows and improving user satisfaction.",

        sl2: 2,
        name2: "Kevin Wong",
        designation2: "Product Manager at Spotify",
        image2: "assets/images/references-page/reviewphoto7.png",
        message2: "Working with Shanze on a research-driven design sprint was a fantastic experience. She has a keen eye for identifying user pain points and translating them into seamless design solutions. Her ability to balance creativity with functionality makes her a strong asset to any team.",
    },

    {
        sl1: 3,
        name1: "Lucy Richardson",
        designation1: "Mentor, PClub Summer of Code",
        image1: "assets/images/references-page/reviewphoto5.png",
        message1: "Shanze was my co-mentor for PClub Summer of Code in 2020. During those two months, she worked tirelessly and patiently with our mentees. She helped them set up their work environments and created a fun environment for them to learn and display their knowledge. I enjoyed working with her, and our mentees definitely cherished the experiences that she provided for them.",
        
        sl2: 4,
        name2: "Professor at NYU",
        designation2: "Mentor for the Research",
        image2: "assets/images/references-page/reviewphoto1.png",
        message2: "Shanze has shown great interest in handling our projects. She is extremely hard-working, honest, and dependable. Beyond that, she is an impressive problem solver.",
    }
];

AOS.init();

const fillData = () => {
    let output = "";
    
    references.forEach(
        (
            { sl1, image1, name1, designation1, message1,
              sl2, image2, name2, designation2, message2 }
        ) =>
           (output +=
            `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class="referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div>
                    <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                <td class="referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image2}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle">${name2} </a> 
                    <div> ${designation2} </div>
                    <div class="rConferences">
                        <div class="referenceY">${message2}</div>
                    </div>
                </td>
                <td class="imgCol"><img src="${image2}" class="rImg1"></td>
            </tr>`
        )
    );
    referenceTable.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", fillData);
