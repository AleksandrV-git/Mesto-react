import React from 'react';
import mestoApi from '../utils/api';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Profile(props) {

  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function getCards() {

    mestoApi.getInitialCards()
      .then((res) => {
        const arr = res.slice();
        setCards(arr)
        console.log(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
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
      const newCards = cards.filter((c) => c._id !== card._id );
      setCards(newCards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  } 
    }
    

  React.useEffect(() => {
    getCards();
  }, [])

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div onClick={props.onEditAvatar} className="user-info__photo" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
          <div className="user-info__data">
            <h1 className="user-info__name">{currentUser.name}</h1>
            <p className="user-info__job">{currentUser.about}</p>
            <button onClick={props.onEditProfile} className="button profile__button">Edit</button>
          </div>
          <button onClick={props.onAddPlace} className="button user-info__button">+</button>
        </div>
      </div>
      <div className="places-list root__section">
        {cards.map((card, i) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
        ))}
      </div>
    </>
  );
}

export default Profile; 