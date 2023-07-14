
document.querySelector("#push").onclick = function () {
    if (document.querySelector("#newtask input").value.length == 0) {
        alert("Please add text");
    } else {
        const task = document.createElement("div");
        task.classList.add("task");
        task.innerHTML = `
            <span class="taskname">
            ${document.querySelector("#newtask input").value}
            </span>
            <button class="delete"> X </button>
        `;

        let deleteButton = task.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            task.remove();
        });

        document.querySelector("#tasks").appendChild(task);
    }
};







