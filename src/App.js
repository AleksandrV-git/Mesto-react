import logoPath from './images/logo.svg';


function App() {
  return (
    <>
        <div className="root">
    <header className="header root__section">
      <img src={logoPath} alt="mesto logo" className="logo" />
    </header>
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo"></div>
        <div className="user-info__data">
          <h1 className="user-info__name">Jaques Causteau</h1>
          <p className="user-info__job">Sailor, Researcher</p>
          <button className="button profile__button">Edit</button>
        </div>
        <button className="button user-info__button">+</button>
      </div>
    </div>
    <div className="places-list root__section">
    </div>
  </div>
  <div className="popup">
    <div className="popup__content">
      <img src="<%=require('./images/close.svg')%>" alt="" className="popup__close" />
      <h3 className="popup__title">Новое место</h3>
      <form className="popup__form" name="new">
        <span id="name-error" className="popup__error"></span>
        <input id="name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название"
          required minlength="2" maxlength="30" />
        <span id="link-error" className="popup__error"></span>
        <input id="link" type="text" name="link" className="popup__input popup__input_type_link-url"
          placeholder="Ссылка на картинку" required minlength="2" />
        <button type disabled className="button popup__button">+</button>
      </form>
    </div>
  </div>
  <div className="popup popup_edit-profile">
    <div className="popup__content">
      <img src="<%=require('./images/close.svg')%>" alt="" className="popup__close popup__close_edit-profile" />
      <h3 className="popup__title">Редактировать профиль</h3>
      <form className="popup__form" name="formProfile">
        <span id="name-error" className="popup__error"></span>
        <input id="name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Имя" required
          minlength="2" maxlength="30" />
        <span id="about-error" className="popup__error"></span>
        <input id="about" type="text" name="about" className="popup__input popup__input_type_link-url" placeholder="О себе"
          required minlength="2" maxlength="30" />
        <button type disabled className="button popup__button popup__button_edit-profile">Сохранить</button>
      </form>
    </div>
  </div>
  <div className="popup popup_image">
    <div className="popup__content-image">
      <img src="<%=require('./images/close.svg')%>" alt="" className="popup__close popup__close_image" />
      <img src="" alt="" className="popup_img" />
    </div>
  </div>
  <div id="avatarEditPopup" className="popup">
    <div className="popup__content">
      <img id="avatarPopupClose" src="<%=require('./images/close.svg')%>" alt="" className="popup__close" />
      <h3 className="popup__title">Обновть аватар</h3>
      <form className="popup__form" name="formAvatar">
        <span id="avatarLink-error" className="popup__error"></span>
        <input id="avatarLink" type="text" name="link" className="popup__input"
          placeholder="Ссылка на аватар" required minlength="2" pattern="^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$" />
        <button id="avatarEditBtn" type disabled className="button popup__button popup__button_edit-profile">Сохранить</button>
      </form>
    </div>
  </div>
    </>
  );
}

export default App;
