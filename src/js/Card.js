export default class {
  constructor(title, subtitle, link, image, description) {
    this.title = title;
    this.subtitle = subtitle;
    this.link = link;
    this.image = image;
    this.description = description;
    this.card = document.createElement('a');
  }

  createCard() {
    this.card.classList.add('card');
    this.card.setAttribute('href', this.link);
    this.card.innerHTML = `<img src="${this.image}" alt="${this.title}" class="card__img">
    <div class="card__hover">
      <h2 class="card__title">${this.title}</h2>
      <p class="card__description">${this.description}</p>
      <p class="card__subtitle">${this.subtitle}</p>
    </div>`;

    return this.card;
  }
}
