import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm 
      title='Редактировать профиль' 
      name='profile'
      button='Сохранить' 
      isOpen={ isOpen }
      onClose={ onClose }
      onSubmit={ handleSubmit }
    > 
      <label className="popup__container-form-label">
        <input 
          type="text" 
          value={ name || "" }
          onChange= { handleChangeName }
          name="name" 
          id="name-input" 
          className="popup__container-form-field popup__container-form-field_type_name" 
          required 
        />
        <span className="popup__container-form-error name-input-error"></span>
      </label>
      <label className="popup__container-form-label">
        <input 
          type="text"
          value={ description || "" }
          onChange={ handleChangeDescription } 
          name="job" 
          id="job-input" 
          className="popup__container-form-field popup__container-form-field_type_job" 
          required 
        />
        <span className="popup__container-form-error job-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;