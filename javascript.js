const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", () => {
    //creat li
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(listInput.value);
    //add input value into new li
    newLi.appendChild(liContent);
    //add li to user list
    userList.appendChild(newLi);
});