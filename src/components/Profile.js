import React from 'react';
import mestoApi from '../utils/api';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Profile(props) {

  const cards = props.cards;
  const currentUser = React.useContext(CurrentUserContext);

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
          <Card key={card._id} card={card}
          onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
        ))}
      </div>
    </>
  );
}

export default Profile; 