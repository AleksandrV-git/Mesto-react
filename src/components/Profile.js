import React from 'react';
import mestoApi from '../utils/api';
import Card from './Card.js';

function Profile(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  function getUserInfo() {

    mestoApi.getUserProfile()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

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

  React.useEffect(() => {

    getUserInfo();
    getCards();

  }, [])

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div onClick={props.onEditAvatar} className="user-info__photo" style={{ backgroundImage: `url(${userAvatar})` }}></div>
          <div className="user-info__data">
            <h1 className="user-info__name">{userName}</h1>
            <p className="user-info__job">{userDescription}</p>
            <button onClick={props.onEditProfile} className="button profile__button">Edit</button>
          </div>
          <button onClick={props.onAddPlace} className="button user-info__button">+</button>
        </div>
      </div>
      <div className="places-list root__section">
        {cards.map((card, i) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </div>
    </>
  );
}

export default Profile; 