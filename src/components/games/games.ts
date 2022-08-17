import { createElement } from '../../utils/tools';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const gamesTemplateInner = `
<h1 class="games-title">Игры</h1>
<div class="img-x5 position-left">
  <img src="./assets/bubbles.svg" alt="bubbles"/>
</div>
<article class="games-wrapper">
  <a href="/audiochallenge" class="games-link">
    <figure class="games-figure">
      <p>
        <img
          src="../../assets/games/headphones.svg"
          alt="headphones"
          class="games-figure__image"
        />
      </p>
      <figcaption class="games-figcaption">Аудиовызов</figcaption>
    </figure>
  </a>
  <a href="/sprint" class="games-link">
    <figure class="games-figure">
      <p>
        <img
          src="../../assets/games/fish.svg"
          alt="fish"
          class="games-figure__image games-figure__image_fish"
        />
      </p>
      <figcaption class="games-figcaption">Спринт</figcaption>
    </figure>
  </a>
</article>
<div class="img-x5 position-right">
  <img src="./assets/bubbles.svg" alt="bubbles" />
</div>
`;

class Games {
  games;

  constructor() {
    this.games = createElement('section', 'games-section');
    this.games.innerHTML = gamesTemplateInner;
    this.bind();
  }

  render = () => {
    return this.games;
  };

  bind = () => {
    this.games.addEventListener('click', (event) => {
      event.preventDefault();
      const anchor = (<HTMLElement>event.target).closest('a') as HTMLAnchorElement;
      if (anchor) {
        const url = anchor.pathname;
        history.push(url);
      }

    });
  };
}

export { Games, history };