const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const list = document.getElementById("list");

const filter = {
  searchText: ''
};

const renderFruits = (fruits, filter) => {
  const filtered = fruits.filter((fruit) => {
    return fruit.toLowerCase().includes(filter.searchText.toLowerCase());
  });

  list.innerHTML = '';
  filtered.forEach((item) => {
    const tagP = document.createElement("p");
    tagP.className = "sub";
    const value = document.createTextNode(item);
    tagP.appendChild(value);
    list.appendChild(tagP);

    tagP.addEventListener("click", function () {
      // Remove the "selected" class from all elements
      const allElements = document.querySelectorAll(".sub");
      allElements.forEach((el) => el.classList.remove("selected"));

      // Add the "selected" class to the clicked element
      tagP.classList.add("selected");
    });
  });
};

renderFruits(fruits, filter);

document.querySelector("#buah").addEventListener("input", function (e) {
  filter.searchText = e.target.value;
  renderFruits(fruits, filter);
});