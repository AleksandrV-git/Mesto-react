import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [Imglink, setImglink] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleImglink(e) {
    setImglink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: name,
      link: Imglink,
    });
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} title="Новое место" name="" formName="new" id=""
    isOpen={props.isOpen} onClose={props.onClose}>
      <span id="name-error" className="popup__error"></span>
      <input value={name} onChange={handleName} id="name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название"
        required minLength="2" maxLength="30" />
      <span id="link-error" className="popup__error"></span>
      <input value={Imglink} onChange={handleImglink} id="link" type="text" name="link" className="popup__input popup__input_type_link-url"
        placeholder="Ссылка на картинку" required minLength="2" />
      <button className="button popup__button popup__btn_enabled">+</button>
    </PopupWithForm>
  );
}

export default AddPlacePopup; 