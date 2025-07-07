// src/js/cancel.js
import "../styles/success.css";

//font awesome and the fonts
import '@fortawesome/fontawesome-free/css/all.min.css'; // import font-awesome

import '@fontsource/poppins/300.css'; //Import google fonts (Poppins)
import '@fontsource/poppins/700.css'; //Import google fonts (Poppins)


document.addEventListener("DOMContentLoaded", () => {
  console.log("⚠️ Payment was cancelled.");

  // Optional: Suggest retry or auto-redirect
  setTimeout(() => {
    window.location.href = "/pages/compliance-audits.html";
  }, 10000);
});
