import closePath from '../images/close.svg';
import React from 'react';

import Header from './Header.js';
import Profile from './Profile.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import ImagePopup from './ImagePopup.js';
import mestoApi from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setСurrentUser] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    const newObj = {...card}
    setSelectedCard(newObj);
  }

  function handleUpdateUser(user) {
    mestoApi.patchUserProfile(user.name, user.about)
      .then((user) => {
        setСurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  function handleUpdateAvatar(user) {
    mestoApi.patchUserAvatar(user.avatar)
      .then((user) => {
        setСurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function getUserInfo() {
    mestoApi.getUserProfile()
      .then((result) => {
        const newObj = {...result}
        setСurrentUser(newObj);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  React.useEffect(() => {
    getUserInfo();
  }, [] )

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Profile
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick} />
        <div className="places-list root__section">
        </div>
      </div>
      <PopupWithForm
        title="Новое место" name="" formName="new" id=""
        isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <span id="name-error" className="popup__error"></span>
        <input id="name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название"
          required minLength="2" maxLength="30" />
        <span id="link-error" className="popup__error"></span>
        <input id="link" type="text" name="link" className="popup__input popup__input_type_link-url"
          placeholder="Ссылка на картинку" required minLength="2" />
        <button disabled className="button popup__button">+</button>
      </PopupWithForm>
      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} /> 
      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
