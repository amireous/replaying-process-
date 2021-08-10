const mainAddBtn = document.querySelector(".add-btn");
const mainRemoveBtn = document.querySelector(".remove-all-btn");

let itemID = 0;

function addItem(parent) {
  itemID++;

  const item = document.createElement("div");

  item.classList.add("item");
  item.id = itemID;

  item.innerHTML = `
  <div class = "item-el ">
   <p class = "item-text" >div id : <span>${item.id}</span> </p>
   <button class="add-child-btn">add child</button>
   <button class="remove-child-btn">remove child</button>
   </div>`;

  parent.appendChild(item);

  const items = item.parentNode.getElementsByClassName("item");
  console.log(items[items.length - 1]);
  items[items.length - 1]
    .getElementsByClassName("add-child-btn")[0]
    .addEventListener("click", function () {
      addItem(this.parentNode);
    });
}

mainAddBtn.addEventListener("click", () => {
  addItem(document.querySelector(".item-list"));
});

function mainRemoveAllItem(element) {
  element.forEach((el) => el.remove());
}

mainRemoveBtn.addEventListener("click", () => {
  itemID = 0;
  mainRemoveAllItem(document.querySelectorAll(".item"));
});
