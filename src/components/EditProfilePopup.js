import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  } 

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  return (
    <PopupWithForm onSubmit={handleSubmit} title="Редактировать профиль" name="popup_edit-profile" formName="formProfile" id=""
        isOpen={props.isOpen} onClose={props.closeAllPopups}>
        <span id="name-error" className="popup__error"></span>
        <input value={name} onChange={handleName} id="name" type="text" name="name"
          className="popup__input popup__input_type_name" placeholder="Имя" required minLength="2" maxLength="30" />
        <span id="about-error" className="popup__error"></span>
        <input value={description} onChange={handleDescription} id="about" type="text" name="about"
          className="popup__input popup__input_type_link-url" placeholder="О себе" required minLength="2" maxLength="60" />
        <button className="button popup__button popup__button_edit-profile popup__btn_enabled">Сохранить</button>
      </PopupWithForm>
  );
}

export default EditProfilePopup; 