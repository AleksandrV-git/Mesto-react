class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserProfile = () => {

    return fetch(this.baseUrl + "/users/me", { headers: this.headers })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }

  getInitialCards = () => {

    return fetch(this.baseUrl + "/cards", { headers: this.headers })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }

  patchUserProfile = (nameValue, aboutValue) => {

    return fetch(this.baseUrl + "/users/me", {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: nameValue,
        about: aboutValue
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }

  postCard = (nameValue, linkValue) => {

    return fetch(this.baseUrl + "/cards", {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: nameValue,
        link: linkValue
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }

  deleteCard = (id, removeHandler) => {

    if (window.confirm("Вы действительно хотите удалить эту карточку?")) {
      return fetch(this.baseUrl + "/cards/" + id, {
        method: 'DELETE',
        headers: this.headers
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res.status);
        })
    }
  }

  likeCard = (id, isLiked) => {
    
    const method = isLiked ? 'DELETE' : 'PUT';

    return fetch(this.baseUrl + "/cards/like/" + id, {
      method: method,
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }

  patchUserAvatar = (avatarLink) => {

    return fetch(this.baseUrl + "/users/me/avatar", {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarLink,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }
}

const userApiOptions = {
  baseUrl: `https://nomoreparties.co/cohort11`,
  headers: {
    authorization: '9e994c9b-3ee0-4017-bdfe-5cb3911497f0',
    'Content-Type': 'application/json'
  }
};

//экземпляр класса
const mestoApi = new Api(userApiOptions);

export default mestoApi;