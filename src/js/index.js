import "../styles/main.css"; //import styles 

import logo from '../Assets/images/logo.png'; //load logo
import kevin from '../Assets/Team/Kevin.jpg'; //load image
import norman from '../Assets/Team/Norman.jpg';
import tom from '../Assets/Team/Tom.jpg';
//For scroll transition
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
// src/index.js
import '@fortawesome/fontawesome-free/css/all.min.css'; // import font-awesome

import '@fontsource/poppins/300.css'; //Import google fonts (Poppins)
import '@fontsource/poppins/700.css'; //Import google fonts (Poppins)


function loadImages () {
  //Load the logo image

    const logoImg = document.getElementById('logoImg');
    logoImg.src = logo; 
    logoImg.classList.add('logo');

    //load kevin picture
    const member_1 = document.getElementById('member_1');
    member_1.src = kevin;
    member_1.classList.add('team_img');

    // load norman picture
    const member_2 = document.getElementById('member_2');
    member_2.src = norman;
    member_2.classList.add('team_img');

    // load tom
    const member_3 = document.getElementById('member_3');
    member_3.src = tom;
    member_3.classList.add('team_img');

}
loadImages();

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to top
  const backToTopBtn = document.getElementById("backToTopBtn");

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Floating "Need Help?" button - simulate chatbot
  const helpBtn = document.getElementById("helpBtn");

  helpBtn.addEventListener("click", () => {
    alert("👋 Hi there! How can we assist you today?\n\n(You can connect this to a chatbot or contact modal.)");
  });

  // Optional: Animate impact counters
  const counters = document.querySelectorAll(".counter span");

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.innerText.replace("+", "");
      const count = +counter.getAttribute("data-count") || 0;
      const speed = 30;

      if (count < target) {
        counter.setAttribute("data-count", count + 1);
        counter.innerText = `${count + 1}+`;
        setTimeout(updateCount, speed);
      }
    };
    updateCount();
  });
});


