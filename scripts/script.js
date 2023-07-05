/* let profile = document.querySelector(".profile");
let popup = document.querySelector(".popup");
let editButton = profile.querySelector(".profile__edit-button");
let closeButton = popup.querySelector(".close");
let saveButton = popup.querySelectorALL(".button__submit");


function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

  editButton.addEventListener("click" , openPopup);
  closeButton.addEventListener("click" , closePopup); */

    /*
    editButton.addEventListener('click', function() {
      popup.style.display = 'block';
      nameInput.value = profileName.textContent;
      infoInput.value = profileInfo.textContent;
    })
    
     closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });

    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', function(event) {
      event.preventDefault();
      profileName.textContent = nameInput.value;
      profileInfo.textContent = infoInput.value;
      popup.style.display = 'none';
    });
    
    */ 

    let profile = document.querySelector(".profile");
    let popup = document.querySelector(".popup");
    let editButton = document.querySelector('.profile__edit-button');
    let addButton = document.querySelector('.profile__add-button');
    let closeButton = document.querySelector(".close-icon");
    let nameInput = document.getElementById('name');
    let infoInput = document.getElementById('info');
    let profileName = document.querySelector('.profile__name_p');
    let profileInfo = document.querySelector('.profile__text');


    function togglePopup() {
      popup.classList.toggle("popup_show");
    }

    editButton.addEventListener("click" , togglePopup);
    closeButton.addEventListener("click" , togglePopup);

   
    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', function(event) {
      event.preventDefault();
      profileName.textContent = nameInput.value;
      profileInfo.textContent = infoInput.value;
      popup.style.display = 'none';
    });
    
  