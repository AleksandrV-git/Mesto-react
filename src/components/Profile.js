function Profile(props) {

  return (
    <div className="profile root__section">
      <div className="user-info">
        <div onClick={props.onEditAvatar} className="user-info__photo"></div>
        <div className="user-info__data">
          <h1 className="user-info__name">Jaques Causteau</h1>
          <p className="user-info__job">Sailor, Researcher</p>
          <button onClick={props.onEditProfile} className="button profile__button">Edit</button>
        </div>
        <button onClick={props.onAddPlace} className="button user-info__button">+</button>
      </div>
    </div>
  );
}

export default Profile; 