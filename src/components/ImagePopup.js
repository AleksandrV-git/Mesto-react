import closePath from '../images/close.svg';

function ImagePopup() {

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