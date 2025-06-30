// random quotes logic
const adviceDemoP = document.getElementById("demoP");

fetch("https://api.adviceslip.com/advice", {
  method: "GET",
  cache: "no-cache", // to get new quote every time
})
  .then(function (quoteResponse) {
    if (!quoteResponse.ok || quoteResponse.status === 404) {
      throw new Error("ციტატა ვერ მოიძებნა");
    }
    return quoteResponse.json();
  })
  .then(function (responseData) {
    const advice = responseData.slip.advice;
    const id = responseData.slip.id;
    demoP.innerHTML = `${advice}`;
  })
  .catch(function (error) {
    demoP.innerHTML = "დაფიქსირდა შეცდომა.";
    document.getElementById("data").textContent =
      error.message || "Server Error";
  });
