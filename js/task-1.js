const categoriesList = document.querySelector("#categories");
const categorieItems = document.querySelectorAll(".item");

console.log(`Number of categoties: ${categorieItems.length}`);

categorieItems.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
