import '../styles/service.css'; //import styles 

import '@fortawesome/fontawesome-free/css/all.min.css'; // import font-awesome

import '@fontsource/poppins/300.css'; //Import google fonts (Poppins)
import '@fontsource/poppins/700.css'; //Import google fonts (Poppins)

document.addEventListener("DOMContentLoaded", () => {
  const serviceSections = document.querySelectorAll(".service-detail");

  serviceSections.forEach(section => {
    section.addEventListener("click", () => {
      alert(`More details about: ${section.querySelector("h2").innerText}`);
      // You can replace this alert with modal display logic later
    });
  });
});