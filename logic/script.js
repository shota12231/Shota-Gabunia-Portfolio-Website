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

button.addEventListener("click", () => {
  const isDark = document.body.style.backgroundColor === "rgb(40, 44, 51)";

  if (isDark) {
    document.body.style.backgroundColor = "#e6ebf0"; // light background
    button.textContent = "Dark Mode";
  } else {
    document.body.style.backgroundColor = "#282c33"; // dark background
    button.textContent = "Light Mode";
  }
});
