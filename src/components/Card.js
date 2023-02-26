function Card({ id, link, likes, title, onCardClick }) {

  function handleClick() {
    onCardClick(link, title);
  }

  return (
    <li key={ id } className="card">
      <img onClick={ handleClick } src={ link } alt={ title } className="card__img" />
      <button type="button" className="card__btn-delete"></button>
      <h2 className="card__title">{ title }</h2>
      <button type="button" className="card__like"><span className="card__like_number">{ likes }</span></button>
    </li>
  );
}

export default Card;