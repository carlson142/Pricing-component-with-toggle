const btn = document.querySelector(".btn-toggle");
const allPrices = document.querySelectorAll(".card__price");

let counter = 0;

btn.addEventListener("click", () => {
  counter++;
  if (counter % 2) {
    allPrices.forEach((value) => {
      setTimeout(() => {
        const update = Number(value.textContent.replace("$", "")) * 10;
        value.textContent = `$${update.toFixed(1)}9`;
      }, 300);
    });
  } else if (counter % 2 === 0) {
    allPrices.forEach((value) => {
      setTimeout(() => {
        const update = Number(value.textContent.replace("$", "")) / 10;
        value.textContent = `$${String(update).slice(0, 5)}`;
      }, 300);
    });
  }
});
