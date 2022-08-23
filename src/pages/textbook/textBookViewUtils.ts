import { TypedEmitter } from 'tiny-typed-emitter';
import {
  TextBookEventsType,
  TextBookModelInterface,
  TextBookViewInterface, TextBookViewUtilsInerface,
} from '../../types/textbookTypes';
import { LocalStorage } from '../../utils/storage';
import { getElement } from '../../utils/tools';

export class TextBookViewUtils extends TypedEmitter<TextBookEventsType> implements TextBookViewUtilsInerface {
  textBookModel;

  textBookView;

  constructor(textBookModel: TextBookModelInterface, textBookView: TextBookViewInterface) {
    super();
    this.textBookModel = textBookModel;
    this.textBookView = textBookView;
  }

  createTextBookMain = (template: string): void => {
    const mainWrapper = getElement('main__wrapper');
    mainWrapper.innerHTML = '';
    mainWrapper.insertAdjacentHTML('afterbegin', template);
  }

  addReadMeListeners = (): void => {
    const readMeBtn = getElement('textbook-instructions-btn') as HTMLButtonElement;
    const readMeBlock = getElement('textbook-readme-block') as HTMLDivElement;
    readMeBtn.addEventListener('click', () => {
      readMeBlock.classList.toggle('hide');
      readMeBlock.classList.toggle('overlay');
    });

    const closeReadmeBtn = getElement('close-readme-btn') as HTMLButtonElement;
    closeReadmeBtn.addEventListener('click', () => {
      readMeBlock.classList.toggle('hide');
      readMeBlock.classList.toggle('overlay');
    });
  }

  checkGamesBtnsColor = (): void => {
    const currGroup = `group-${LocalStorage.currUserSettings.currGroup}`;
    const gameBtns = document.getElementsByClassName('textbook-games-btn') as HTMLCollectionOf<HTMLButtonElement>;
    [...gameBtns].forEach((btn) => btn.classList.add(currGroup));
  };

  checkActiveWordsBtns = (wordID: string): void => {
    const activeWordBtns = document.getElementsByClassName('words-btns__btn--active');
    if (activeWordBtns.length > 0) {
      [...activeWordBtns].forEach((btn) => btn.classList.remove('words-btns__btn--active'));
    }

    const wordBtns = document.getElementsByClassName('words-btns__btn');
    if (wordID) {
      const activeWordIdx = this.textBookModel.wordsChunk.map((word) => word.id).indexOf(`${wordID}`);
      if (activeWordIdx === -1) {
        wordBtns[0].classList.add('words-btns__btn--active');
      } else {
        wordBtns[activeWordIdx].classList.add('words-btns__btn--active');
      }
    } else {
      const firstWordBtn = getElement('words-btns__btn');
      firstWordBtn.classList.add('words-btns__btn--active');
    }
  };

  checkActiveWordCard = (): void => {
    const activeWordIdx = this.textBookModel.wordsChunk.map((word) => word.id).indexOf(`${LocalStorage.currUserSettings.currWord}`);
    if (activeWordIdx === -1) {
      this.textBookView.createWordCard(this.textBookModel.wordsChunk[0]);
    } else {
      this.textBookView.createWordCard(this.textBookModel.wordsChunk[activeWordIdx]);
    }
  }

  checkActiveDifficultyBtn = (activeGroupNum: number): void => {
    const activeDifficultyBtns = document.getElementsByClassName('textbook-difficulty-group__btn--active');
    if (activeDifficultyBtns.length > 0) {
      [...activeDifficultyBtns].forEach((btn) => btn.classList.remove('textbook-difficulty-group__btn--active'));
    }
    const difficultyBtns = document.getElementsByClassName('textbook-difficulty-group__btn');
    difficultyBtns[activeGroupNum].classList.add('textbook-difficulty-group__btn--active');
  };

  checkActivePage = (currPage: number): void => {
    const activePagesBtns = document.getElementsByClassName('pagination__page-btn--active');
    if (activePagesBtns.length > 0) {
      [...activePagesBtns].forEach((btn) => btn.classList.remove('pagination__page-btn--active'));
    }
    const pagesBtns = document.getElementsByClassName('pagination__page-btn');
    pagesBtns[currPage].classList.add('pagination__page-btn--active');
  };
}