document.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
  getLikeCount();

  // Event listener for the like button
  document.getElementById("likeButton").addEventListener("click", () => {
    handleLike();
  });
});

const localApi = "http://localhost:7071/api/GetResumeCounter";
const functionApiUrl =
  "https://myfunctionresume.azurewebsites.net/api/GetResumeCounter?code=eU8WC-_ihp4jO8rB_zvpCA5L99wF6oPWmkGSEYo0mGO5AzFuT0elsQ==";

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
    .catch((error) => {
      console.log(error);
    });
};

const getLikeCount = () => {
  const likeCount = localStorage.getItem("likeCount");
  if (likeCount) {
    document.getElementById("likeCount").textContent = likeCount;
  }
};

const handleLike = () => {
  fetch(functionApiUrl, { method: "POST" })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const updatedLikes = response.likes;
      const likeCount = document.getElementById("likeCount");
      likeCount.textContent = updatedLikes;
      localStorage.setItem("likeCount", updatedLikes);
      document.getElementById("likeMessage").textContent = "Thanks for stopping by!";
    })
    .catch((error) => {
      console.log(error);
    });
};
