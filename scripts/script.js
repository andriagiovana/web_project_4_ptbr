const profile = document.querySelector(".profile");
const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButton = document.querySelector(".close-icon");
const nameInput = document.getElementById("name");
const infoInput = document.getElementById("info");
const profileName = document.querySelector(".profile__name_p");
const profileInfo = document.querySelector(".profile__text");

function togglePopup() {
  popup.classList.toggle("popup_show");
}

editButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);

const editForm = document.getElementById("editForm");
editForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
  popup.style.display = "none";
});
