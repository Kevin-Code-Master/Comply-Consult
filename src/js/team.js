import "../styles/team.css"; //import styles 

import kevin from '../Assets/Team/Kevin.jpg'; //load image
import norman from '../Assets/Team/Norman.jpg';
import tom from '../Assets/Team/Tom.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css'; // import font-awesome

import '@fontsource/poppins/300.css'; //Import google fonts (Poppins)
import '@fontsource/poppins/700.css'; //Import google fonts (Poppins)

function loadImages () {
  //Load the logo image
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

document.addEventListener("DOMContentLoaded", () => {
  const teamCards = document.querySelectorAll(".team-member");

  teamCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.05)";
    });
  });
});