import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBf1DPbzD-m4_6O-uHe0MFd3HBE6gmgPgs",
  authDomain: "royal-sport-bbc35.firebaseapp.com",
  projectId: "royal-sport-bbc35",
  storageBucket: "royal-sport-bbc35.appspot.com",
  messagingSenderId: "235684114432",
  appId: "1:235684114432:web:b1b52258ef2170afe268e5",
  measurementId: "G-36KM8L2J6T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function logButtonClick(event) {
  const buttonId = event.target.id;
  logEvent(analytics, 'button_click', {
    button_id: buttonId
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('a, button, .dropdown-content a, .header-language span');
  
  buttons.forEach(button => {
    button.addEventListener('click', logButtonClick);
  });

  document.querySelector('.burger-menu').addEventListener('click', () => {
    logEvent(analytics, 'menu_toggle', {
      menu_state: document.querySelector('.header').classList.contains('open') ? 'open' : 'closed'
    });
  });
});