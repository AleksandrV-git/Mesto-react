import closePath from '../images/close.svg';

function ImagePopup() {

  function handleEditAvatarClick() {
    document.querySelector("#avatarEditPopup").classList.add('popup_is-opened');
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_edit-profile").classList.add('popup_is-opened');
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup").classList.add('popup_is-opened');
  }

  return (
    <div className="popup popup_image">
    <div className="popup__content-image">
      <img src={closePath} alt="" className="popup__close popup__close_image" />
      <img src="" alt="" className="popup_img" />
    </div>
  </div>
  );
}

export default ImagePopup; 