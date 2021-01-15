import closePath from '../images/close.svg';
import PopupWithForm from './PopupWithForm.js';
import React from 'react';

function EditProfilePopup(props) {

  const [value, setValue] = React.useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <PopupWithForm title="Редактировать профиль" name="popup_edit-profile" formName="formProfile" id=""
        isOpen={props.isEditProfilePopupOpen} onClose={props.closeAllPopups}>
        <span id="name-error" className="popup__error"></span>
        <input value={value} onChange={handleChange} id="name" type="text" name="name"
          className="popup__input popup__input_type_name" placeholder="Имя" required minLength="2" maxLength="30" />
        <span id="about-error" className="popup__error"></span>
        <input value={value} onChange={handleChange} id="about" type="text" name="about"
          className="popup__input popup__input_type_link-url" placeholder="О себе" required minLength="2" maxLength="30" />
        <button disabled className="button popup__button popup__button_edit-profile">Сохранить</button>
      </PopupWithForm>
  );
}

export default EditProfilePopup; 