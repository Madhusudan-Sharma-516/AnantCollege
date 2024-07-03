let submit = document.querySelector(".button");
let listBox = document.querySelector(".list-box");
let iconCross = `<i class="fa-regular fa-circle-xmark"></i>`;



submit.addEventListener("click", function(){
    let list = document.createElement("div");
    let task = document.querySelector("#task");
    list.classList.add("list");
    list.innerHTML = `${task.value} ${iconCross}`;
    listBox.appendChild(list); 
    task.value = "";  
});
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("fa-circle-xmark")) {
        let list = event.target.closest(".list");
        list.remove(); // Removes the entire list item
        console.log("Item deleted");
    }
});