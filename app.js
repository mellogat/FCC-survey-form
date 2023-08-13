let currentTab = 1;
showTab(currentTab);

function showTab(tabIndex) {
  const tabs = document.getElementsByClassName("tab");
  tabs[tabIndex - 1].style.display = "block";
}

function hideTab(tabIndex) {
  const tabs = document.getElementsByClassName("tab");
  tabs[tabIndex - 1].style.display = "none";
}

function nextTab(step, event) {
    if (validateCurrentTab(currentTab)) {
      hideTab(currentTab);
      currentTab += step;
      if (currentTab > 4) {
        currentTab = 4;
      }
      showTab(currentTab);
    }
  
    event.preventDefault(); // Prevent default form submission behavior
  }
  
  function validateCurrentTab(tabIndex) {
    const currentTabInputs = document.querySelectorAll(
      `.tab:nth-child(${tabIndex}) input[required]`
    );
  
    for (const input of currentTabInputs) {
      if (input.type === "radio") {
        const radioGroup = document.querySelectorAll(
          `.tab:nth-child(${tabIndex}) input[name="${input.name}"]`
        );
        if (!Array.from(radioGroup).some((radio) => radio.checked)) {
          alert("Please select an option before proceeding.");
          return false;
        }
      } else if (!input.value) {
        alert("Please fill in all required fields before proceeding.");
        return false;
      }
    }
  
    return true;
  }
  

function prevTab(step) {
  hideTab(currentTab);
  currentTab -= step;
  showTab(currentTab);
  console.log(currentTab);
  event.preventDefault()
}

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const dropdown = document.getElementById("dropdown").value;
    const rate = document.querySelector('input[name="rate"]:checked').value;
  
    const topicsCheckboxes = document.querySelectorAll(
      'input[name="topics"]:checked'
    );
    const topics = Array.from(topicsCheckboxes).map((checkbox) => checkbox.value);
  
    const comments = document.getElementById("comments").value;
  
    // Display the form data (you can replace this with your own logic)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", number);
    console.log("Gender:", dropdown);
    console.log("Rating:", rate);
    console.log("Favorite topics:", topics);
    console.log("Additional Comments:", comments);
  
    // Show the "Thank You" message and hide the form
    const form = document.getElementById("survey-form");
    const thankYouMessage = document.getElementById("thank-you");
    
    form.style.display = "none";
    thankYouMessage.style.display = "block";
  
    // Prevent the form from submitting and refreshing the page
    return false;
  }
  