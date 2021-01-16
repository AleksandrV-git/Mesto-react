import React from 'react';

import Header from './Header.js';
import Profile from './Profile.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import mestoApi from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setСurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

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
    const newObj = { ...card }
    setSelectedCard(newObj);
  }

  function handleUpdateUser(user) {
    mestoApi.patchUserProfile(user.name, user.about)
      .then((user) => { setСurrentUser(user); closeAllPopups(); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function handleUpdateAvatar(user) {
    mestoApi.patchUserAvatar(user.avatar)
      .then((user) => { setСurrentUser(user); closeAllPopups(); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function handleAddPlaceSubmit(card) {
    mestoApi.postCard(card.name, card.link)
      .then((card) => { setCards([...cards, card]); closeAllPopups(); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function getUserInfo() {
    mestoApi.getUserProfile()
      .then((result) => { const newObj = { ...result }; setСurrentUser(newObj); })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function getCards() {
    mestoApi.getInitialCards()
      .then((res) => { const arr = res.slice(); setCards(arr) })
      .catch((err) => { console.log(`Ошибка: ${err}`); })
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    mestoApi.likeCard(card._id, isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }
  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;
    if (isOwn) {
      mestoApi.deleteCard(card._id)
        .then(() => {
          const newCards = cards.filter((c) => c._id !== card._id);
          setCards(newCards);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
    }
  }

  React.useEffect(() => {
    getUserInfo();
    getCards();
  }, [])

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <Header />
          <Profile
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} />
          <div className="places-list root__section">
          </div>
        </div>
        <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
