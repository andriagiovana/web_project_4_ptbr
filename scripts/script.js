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

    let profile = document.querySelector(".profile");
    let popup = document.querySelector(".popup");
    let editButton = document.querySelector('.profile__edit-button');
    let closeButton = document.getElementById('closeButton');
    let nameInput = document.getElementById('name');
    let infoInput = document.getElementById('info');
    let profileName = document.querySelector('.profile__name_p');
    let profileInfo = document.querySelector('.profile__text');

    // Exibir o popup quando o botão de edição for clicado
    editButton.addEventListener('click', function() {
      popup.style.display = 'block';
      nameInput.value = profileName.textContent;
      infoInput.value = profileInfo.textContent;
    });

    function togglePopup() {
      popup.classList.toggle("popup_show");
    }

    // Fechar o popup quando o botão de fechar for clicado
    closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });

    // Atualizar o nome e informações do perfil quando o formulário for enviado
    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', function(event) {
      event.preventDefault();
      profileName.textContent = nameInput.value;
      profileInfo.textContent = infoInput.value;
      popup.style.display = 'none';
    });
  