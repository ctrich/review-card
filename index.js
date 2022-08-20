let ratings = document.querySelectorAll(".card-selections-item");
let btn = document.querySelector(".btn");
let ratingsArray = Array.from(ratings);

const selected = (e) => {
  ratingsArray.forEach((element) => {
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
    }
  });
  e.target.classList.add("selected");
};

const submit = () => {
  let rating = document.querySelector(".selected")
    ? document.querySelector(".selected").innerHTML
    : "nothing";

  if (rating === "nothing") {
    return;
  }

  let resultDisplay = document.querySelector(".card-result");
  document.querySelector(".review-container").classList.add("hidden");
  document.querySelector(".thanks-container").classList.remove("hidden");

  resultDisplay.innerHTML = `You selected ${rating} out of 5`;
  console.log(rating);
};

ratingsArray.forEach((element) => {
  element.addEventListener("click", selected);
});

btn.addEventListener("click", submit);
