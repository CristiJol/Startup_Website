import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

// Get form element
const form = document.querySelector("form");

// Get option checkboxes
const marketing = document.querySelector("#opt-1");
const projectManagement = document.querySelector("#opt-2");
const promoting = document.querySelector("#opt-3");
const humanResources = document.querySelector("#opt-4");
const fundraising = document.querySelector("#opt-5");
const webDesign = document.querySelector("#opt-6");

// Function to get selected checkbox values
const getSelectedOptions = () => {
  const selectedOptions = [];
  const options = [
    marketing,
    projectManagement,
    promoting,
    humanResources,
    fundraising,
    webDesign,
  ];

  options.forEach((option) => {
    if (option.checked) {
      selectedOptions.push(option.value);
    }
  });

  return selectedOptions;
};

// Send data to firestore
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const domains = getSelectedOptions();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  addDoc(collection(database, "registrations"), {
    name,
    email,
    domains,
  })
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.error("error", error);
    });
});
