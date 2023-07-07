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
    
  