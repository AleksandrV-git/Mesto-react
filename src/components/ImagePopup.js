import closePath from '../images/close.svg';

function ImagePopup(props) {

  const openClass = props.card !== {} && props.card.link ? 'popup_is-opened' : ''

  return (
    <div className={`popup popup_image ${openClass}`}>
      <div className="popup__content-image">
        <img src={closePath} alt="" className="popup__close popup__close_image" onClick={props.onClose} />
        <img src={props.card.link && props.card.link } alt="" className="popup_img" />
      </div>
    </div>
  );
}

export default ImagePopup; 