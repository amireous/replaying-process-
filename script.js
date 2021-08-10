const mainAddBtn = document.querySelector(".add-btn");
const mainRemoveBtn = document.querySelector(".remove-all-btn");

let itemID = 0;

function addItem(parent) {
  itemID++;

  const item = document.createElement("div");

  item.classList.add("item");
  item.id = itemID;

  // 3- set a text and buttons for item EL
  item.innerHTML = `
  <div class = "item-el ">
   <p class = "item-text" >div id : <span>${item.id}</span> </p>
   <button class="add-child-btn">add child</button>
   <button class="remove-child-btn">remove child</button>
   </div>`;

  // - append item EL as parent child
  parent.appendChild(item);
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
