import React from 'react';
import mestoApi from '../utils/api';

function Profile(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  function getUserInfo() {

     return mestoApi.getUserProfile()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  React.useEffect(() => {

    getUserInfo()

  })

  return (
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
  );
}

export default Profile; 