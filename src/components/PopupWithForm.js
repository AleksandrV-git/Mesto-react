import closePath from '../images/close.svg';

function PopupWithForm(props) {

  const openClass = props.isOpen ? 'popup_is-opened' : ''

  return (
    <div className={`popup ${props.name} ${openClass}`} id={props.id}>
    <div className="popup__content">
      <img src={closePath} alt="" className="popup__close" onClick={props.onClose} />
      <h3 className="popup__title">{props.title}</h3>
      <form onSubmit={props.onSubmit} className="popup__form" name={props.formName}>
        {props.children}
      </form>
    </div>
  </div>
  );
}

export default PopupWithForm; 