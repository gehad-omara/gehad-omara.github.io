/*getElementsByTagName could not be used with addEventListener, I don't know why*/

const button = document.querySelector("button");
const listContainer = document.getElementById("list-container");
const list = document.getElementById("list");
const textbox = document.getElementById("text");
const restored = document.getElementById("restored");

button.addEventListener("click", addTask);
textbox.addEventListener('keypress', function (e){
 if (e.key == "Enter") {
    e.preventDefault();
    addTask();
 }
 })

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("done");
        save();
    }
    if (e.target.tagName == "I") {
        e.target.parentElement.remove();
        save();
    }
})
function addTask(e) {
    if(textbox.value.length != 0) { 
        var task = document.createElement("li");
         task.innerHTML = textbox.value;
         list.appendChild(task);
         var icon = document.createElement("i");
         icon.setAttribute("class", "fa-regular fa-trash-can");
         task.appendChild(icon);
         var hr =document.createElement("hr");
         list.appendChild(hr);
         textbox.value = "";
         save();
        }
         };

function save () {
    localStorage.setItem("data", list.innerHTML)
}

function restore () {
    restored.innerHTML = localStorage.getItem("data");
} 
restore();

