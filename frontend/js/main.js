window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});


const functionApiUrl =
  "https://myfunctionresume.azurewebsites.net/api/GetResumeCounter?code=eU8WC-_ihp4jO8rB_zvpCA5L99wF6oPWmkGSEYo0mGO5AzFuT0elsQ==";
const localFunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
  fetch(functionApiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API");
      const count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
};
