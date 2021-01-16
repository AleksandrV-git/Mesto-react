import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [avatar, setAvatar] = React.useState('');
  const avatarRef = React.useRef();

  function handleAvatar() {
    setAvatar(avatarRef.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatar,
    });
  } 

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  return (
    <PopupWithForm onSubmit={handleSubmit} title="Обновть аватар" name="" formName="formAvatar" id="avatarEditPopup"
    isOpen={props.isOpen} onClose={props.onClose}>
      <span id="avatarLink-error" className="popup__error"></span>
      <input ref={avatarRef} onChange={handleAvatar} id="avatarLink" type="text" name="link" className="popup__input"
        placeholder="Ссылка на аватар" required minLength="2" pattern="^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$" />
      <button id="avatarEditBtn" className="button popup__button popup__button_edit-profile popup__btn_enabled">Сохранить</button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup; 