// Get form element
const form = document.querySelector("form");
const submitButton = document.querySelector("#submitButton");

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
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const domains = getSelectedOptions();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("options", domains);

  fetch("/Startup_Website/includes/dbh.php", { method: "POST", body: formData }).then((response) =>
    response.text()
  ).then((responseData) =>console.log(responseData));

});
