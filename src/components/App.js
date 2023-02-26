import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isSelectedCard: false });

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(link, title) {
    setSelectedCard({ link: link, title: title, isSelectedCard: true });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
  <>
  <div className="page"> 
    <Header />
    <Main 
      onEditProfile={ handleEditProfileClick }
      onAddPlace={ handleAddPlaceClick }
      onEditAvatar={ handleEditAvatarClick }
      onCardClick={ handleCardClick }
    />
    <Footer />
    <PopupWithForm 
      title='Редактировать профиль' 
      name='profile'
      button='Сохранить' 
      isOpen={ isEditProfilePopupOpen }
      onClose={ closeAllPopups }
      children={
        <>
            <label className="popup__container-form-label">
              <input type="text" name="name" id="name-input" className="popup__container-form-field popup__container-form-field_type_name" required />
              <span className="popup__container-form-error name-input-error"></span>
            </label>
            <label className="popup__container-form-label">
              <input type="text" name="job" id="job-input" className="popup__container-form-field popup__container-form-field_type_job" required />
              <span className="popup__container-form-error job-input-error"></span>
            </label>
        </>
      } 
    />

    <PopupWithForm 
      title='Новое место'
      name='card'
      button='Создать'
      isOpen={ isAddPlacePopupOpen }
      onClose={ closeAllPopups }
      children={
        <>
            <label className="popup__container-form-label">
              <input type="text" name="title" id="title-input" placeholder="Название" className="popup__container-form-field popup__container-form-field_new-place-title" required />
              <span className="popup__container-form-error title-input-error"></span>
            </label>
            <label className="popup__container-form-label">
              <input type="url" name="link" id="link-input" placeholder="Ссылка на картинку" className="popup__container-form-field popup__container-form-field_new-place-link" required />
              <span className="popup__container-form-error link-input-error"></span>
            </label>
        </>
      } 
    />
    
    <PopupWithForm 
      title='Обновить аватар'
      name='avatar'
      button='Сохранить'
      isOpen={ isEditAvatarPopupOpen }
      onClose={ closeAllPopups }
      children={
        <>
            <label className="popup__container-form-label">
              <input type="url" name="avatar" id="avatar-link-input" placeholder="https://somewebsite.com/someimage.jpg" className="popup__container-form-field popup__container-form-field popup__container-form-field_avatar" required />
              <span className="popup__container-form-error avatar-link-input-error"></span>
            </label>
        </>
      }
    />

    <PopupWithForm
      title='Вы уверены?'
      name='delete-card'
      button='Да'
    />

    <ImagePopup 
      card={ selectedCard }
      onClose={ closeAllPopups }
    />

  </div>
  
  </>
  );
}

export default App;
