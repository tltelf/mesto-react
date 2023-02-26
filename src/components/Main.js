import React from 'react';
import editButton from '../images/profile__info-edit-button.svg';
import addButton from '../images/profile__add-button.svg';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([info, data]) => {
      setUserName(info.name);
      setUserDescription(info.about);
      setUserAvatar(info.avatar);

      const newCards = data.map((item) => {
        return {
          id: item._id,
          link: item.link,
          likes: item.likes.length,
          title: item.name,
          onCardClick: onCardClick
        }
      })
      setCards(newCards);
    })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div onClick={ onEditAvatar } className="profile__avatar-container">
          <img src={ userAvatar } alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__info-title">{ userName }</h1>
          <button onClick={ onEditProfile } type="button" className="profile__info-edit-button">
            <img src={ editButton } alt="Редактировать" className="profile__info-edit-button-img" />
          </button>
          <p className="profile__info-subtitle">{ userDescription }</p>
        </div>
        <button onClick={ onAddPlace } type="button" className="profile__add-button">
          <img src={ addButton } alt="Добавить" className="profile__add-button-img" />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__cards">
          { cards.map(({ id, ...prop }) => {
            return (
              <Card key={id} {...prop} />
            )
          }) }
        </ul>
      </section>
    </main>
  );
}

export default Main;