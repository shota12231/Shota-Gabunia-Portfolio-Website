// random quotes logic
const adviceDemoP = document.getElementById("demoP");

fetch("https://api.adviceslip.com/advice", {
  method: "GET",
  cache: "no-cache", // to get new quote every time
})
  .then(function (quoteResponse) {
    if (!quoteResponse.ok || quoteResponse.status === 404) {
      throw new Error("quote not found");
    }
    return quoteResponse.json();
  })
  .then(function (responseData) {
    const advice = responseData.slip.advice;
    const id = responseData.slip.id;
    demoP.innerHTML = `${advice}`;
  })
  .catch(function (error) {
    demoP.innerHTML = "error occured";
    document.getElementById("data").textContent =
      error.message || "Server Error";
  });

// dark and light mode logic
const button = document.getElementById("darkMode");

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.style.backgroundColor = "#282c33";
  button.textContent = "Light Mode";
} else {
  document.body.style.backgroundColor = "#e6ebf0";
  button.textContent = "Dark Mode";
}

// Toggle theme on click
button.addEventListener("click", () => {
  const isDark = document.body.style.backgroundColor === "rgb(40, 44, 51)";

  if (isDark) {
    document.body.style.backgroundColor = "#e6ebf0";
    button.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    document.body.style.backgroundColor = "#282c33";
    button.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  }
});


// dropdown menu 
const burgerMenu = document.getElementById("burger-menu");
const navUl = document.getElementById("navUl");

burgerMenu.addEventListener("click", () => {
  if (navUl.style.display === "flex") {
    navUl.style.display = "none";
  } else {
    navUl.style.display = "flex";
    navUl.style.flexDirection = "column";
    navUl.style.gap = "5px";
    navUl.style.marginTop = "40px";
    navUl.style.alignItems = "start"; // Optional: align to left
  }
});




