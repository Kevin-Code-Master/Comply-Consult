// compliance-audits.js

// Optional interactivity for future payment system
import "../styles/compliance_audit.css";
import logo from '../Assets/images/logo.png'; //load logo
// import font awesome icons and the fonts
import '@fortawesome/fontawesome-free/css/all.min.css'; // import font-awesome

import '@fontsource/poppins/300.css'; //Import google fonts (Poppins)
import '@fontsource/poppins/700.css'; //Import google fonts (Poppins)
//Load the logo image

    const logoImg = document.getElementById('logoImg');
    logoImg.src = logo; 
    logoImg.classList.add('logo');

document.addEventListener("DOMContentLoaded", () => {
  const lockedButtons = document.querySelectorAll(".locked");

  lockedButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("This document is available to subscribers only. Please log in or subscribe to access.");
    });
  });

  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      // Replace this with your backend checkout URL or Stripe redirect
      fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
      })
      .then(res => res.json())
      .then(data => {
        if (data.url) window.location.href = data.url;
      })
        .catch(err => console.error("Payment error:", err));

        });
     }
  });