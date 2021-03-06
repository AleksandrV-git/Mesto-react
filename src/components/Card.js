import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = React.memo((props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const card = props.card; 
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonStyle = isOwn ? "block" : 'none';
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : ''}`
  ); 

  function handleClick() {
    props.onCardClick(card);
  }
  
  function handleLikeClick() {
    props.onCardLike(card);
  }

  function handleDeleteClick(event) {
    event.stopPropagation();
    props.onCardDelete(card);
  }

  return (
    <>
      <div className="place-card">
        <div className="place-card__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleClick} >
          <button className="place-card__delete-icon" style={{ display: `${cardDeleteButtonStyle}` }} onClick={handleDeleteClick}></button>
        </div>
        <div className="place-card__description">
          <h3 className="place-card__name">{card.name}</h3>
          <div className="place-card__like-container">
            <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
            <p className="place-card__like-count">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </>
  )
})

export default Card; 