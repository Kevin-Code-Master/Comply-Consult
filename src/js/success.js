// src/js/success.js
import "../styles/success.css"

// src/index.js
import '@fortawesome/fontawesome-free/css/all.min.css'; // import font-awesome

import '@fontsource/poppins/300.css'; //Import google fonts (Poppins)
import '@fontsource/poppins/700.css'; //Import google fonts (Poppins)

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Payment was successful.");

  // Optional: Auto-redirect back to resources after 10 seconds
  setTimeout(() => {
    window.location.href = "/pages/compliance-audits.html";
  }, 10000);
});
