export default class NewsCardList {
  constructor(container) {
    this.container = container;
  }

  addCard(card) {
    this.container.appendChild(card);
  }
}
