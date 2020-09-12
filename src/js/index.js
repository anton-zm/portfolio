import '../css/index.css';
import Card from './Card';
import CardList from './CardList';
import { DATA } from './cardsData';

const grid = document.querySelector('.grid');

const cardList = new CardList(grid);

function renderCards(array) {
  array.forEach((e) => {
    const card = new Card(e.title, e.subtitle, e.link, e.image, e.description);
    cardList.addCard(card.createCard());
  });
}

renderCards(DATA);
