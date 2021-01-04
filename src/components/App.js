import closePath from '../images/close.svg';
import React from 'react'; 

import Header from './Header.js';
import Profile from './Profile.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  return (
    <>
      <div className="root">
        <Header />
        <Profile onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} />
        <div className="places-list root__section">
        </div>
      </div>
      <PopupWithForm title="Новое место" name="" formName="new" id="" isOpen={isAddPlacePopupOpen}>
        <span id="name-error" className="popup__error"></span>
        <input id="name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название"
          required minlength="2" maxlength="30" />
        <span id="link-error" className="popup__error"></span>
        <input id="link" type="text" name="link" className="popup__input popup__input_type_link-url"
          placeholder="Ссылка на картинку" required minlength="2" />
        <button type disabled className="button popup__button">+</button>
      </PopupWithForm>
      <PopupWithForm title="Редактировать профиль" name="popup_edit-profile" formName="formProfile" id="" isOpen={isEditProfilePopupOpen}>
        <span id="name-error" className="popup__error"></span>
        <input id="name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Имя" required
          minlength="2" maxlength="30" />
        <span id="about-error" className="popup__error"></span>
        <input id="about" type="text" name="about" className="popup__input popup__input_type_link-url" placeholder="О себе"
          required minlength="2" maxlength="30" />
        <button type disabled className="button popup__button popup__button_edit-profile">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm title="Обновть аватар" name="" formName="formAvatar" id="avatarEditPopup" isOpen={isEditAvatarPopupOpen}>
        <span id="avatarLink-error" className="popup__error"></span>
        <input id="avatarLink" type="text" name="link" className="popup__input"
          placeholder="Ссылка на аватар" required minlength="2" pattern="^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$" />
        <button id="avatarEditBtn" type disabled className="button popup__button popup__button_edit-profile">Сохранить</button>
      </PopupWithForm>
      <ImagePopup />
    </>
  );
}

export default App;
