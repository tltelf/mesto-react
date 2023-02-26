function PopupWithForm({ title, name, button, isOpen, onClose, children }) {
  return (
    <div className={ `popup ${name}-popup ${isOpen ? 'popup_opened' : ''}` }>
      <div className={ `popup__container popup__container_${name}` }>
        <h2 className={ `popup__container-title popup__container-title_${name}` }>{ title }</h2>
        <form action="#" name={ name } method="post" className="popup__container-form">
          { children }
          <button className={ `popup__container-form-button popup__container-form-button_${name}` } type="button">{ button }</button>
        </form>
        <button onClick={ onClose } type="button" aria-label="Закрыть" className="popup__button-close popup__button-close_delete-card"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;