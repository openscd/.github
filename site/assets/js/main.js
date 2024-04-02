const cardToggler = () => {
  console.log("card toggler");

  Array.from(document.querySelectorAll(".card-rotate__wrapper")).forEach(
    (cardWrapper) => {
      cardWrapper.addEventListener("click", () => {
        cardWrapper.classList.toggle("card-rotate__wrapper--back-shown");
      });

      Array.from(cardWrapper.querySelectorAll(".card")).forEach((card) => {
        card.style.height = `${Array.from(card.children)
          .map((c) => c.offsetHeight)
          .reduce((a, b) => a + b)}px`;
      });
    }
  );
};

document.addEventListener("DOMContentLoaded", () => {
  cardToggler();
});
