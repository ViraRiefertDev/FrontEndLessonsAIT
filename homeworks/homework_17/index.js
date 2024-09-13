const productpriceArray = document.querySelectorAll(".product-price");
const filterButton = document.querySelector(".filter-button");
const productCards = document.querySelectorAll(".poduct-card");

priceArray = [100, 400, 900, 300, 500];

let index = 0;
productpriceArray.forEach((priceBlock) => {
   priceBlock.textContent = priceArray[index] + " Euro";
   index++;
});


filterProductsByPrice = () => {
   productCards.forEach((card) => {
      const priceElement = card.querySelector(".product-price");
      const priceText = priceElement.textContent.trim();
      const priceValue = parseInt(priceText);
      if (priceValue < 450) {
         card.classList.toggle("hide-card");
      }
   });
};

filterButton.addEventListener("click", filterProductsByPrice);
