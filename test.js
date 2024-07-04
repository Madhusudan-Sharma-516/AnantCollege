let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

const iconCross = `<i class="fa-regular fa-circle-xmark"></i>`;

document.querySelector(".button").addEventListener("click", () => {
    const item = document.querySelector("#task");
    createItem(item);
});

document.querySelector("#task").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const item = document.querySelector("#task");
        createItem(item);
    }
});

function displayItems() {
    const container = document.querySelector(".list-container");
    container.innerHTML = ""; // Clear previous items
    for (let i = 0; i < itemsArray.length; i++) {
        let itemElement = document.createElement("div");
        itemElement.classList.add("list-item");
        itemElement.innerHTML = `${itemsArray[i]} ${iconCross}`;
        
        // Attach delete listener
        itemElement.querySelector("i").addEventListener("click", () => { deleteItem(i) });

        container.appendChild(itemElement);
    }
}

function createItem(item) {
    if (item.value.trim() !== "") {
        itemsArray.push(item.value.trim());
        localStorage.setItem('items', JSON.stringify(itemsArray));
        item.value = ""; // Clear input field
        displayItems(); // Update the display
    }
}

function deleteItem(index) {
    itemsArray.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    displayItems(); // Update the display
}

window.onload = function() {
    displayItems();
};
