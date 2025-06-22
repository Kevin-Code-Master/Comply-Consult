import "./styles/main.css"; //import styles 
import logo from './Assets/logo.png';
import kevin from './Assets/Team/Kevin.jpg'; //load image
import norman from './Assets/Team/Norman.jpg';
import tom from './Assets/Team/Tom.jpg';
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
loadImages()

//Create the context menu

const toggleBtn = document.getElementById('nav-toggle');
  const nav = document.getElementById('navbar');

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
  });

// Form update and validity
const emailInput = document.querySelector('input[type="email"]');
emailInput.addEventListener('input', () => {
  if (!emailInput.validity.valid) {
    emailInput.style.borderColor = 'red';
  } else {
    emailInput.style.borderColor = 'green';
  }
});

// FOr the counter section/ Impact

const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

