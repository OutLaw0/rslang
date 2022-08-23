import { TypedEmitter } from 'tiny-typed-emitter';
import { WordsChunkType } from './textbookTypes';

export interface GamesEntranceViewInterface extends TypedEmitter<GamesEntranceEventType> {
  gamesEntranceModel: GamesEntranceModelInterface;
  buildSprintHTML(): HTMLElement;
  buildAudioChallengeHTML(): HTMLElement;
  createAudioChallengeTitle(): HTMLElement;
  createSprintTitle(): HTMLElement;
  createSprintStartButton(): HTMLElement;
  createAudioChallengeStartButton(): HTMLElement;
  createSprintDescription(): HTMLElement;
  createAudioChallengeDescription(): HTMLElement;
  createSprintImage(): HTMLElement;
  createAudioChallengeImage(): HTMLElement;
}

export interface GamesEntranceModelInterface extends TypedEmitter<GamesEntranceEventType> {
  addGameLevel(level: number): void;
  startSprintGame(): void;
}

export type GamesEntranceEventType = {
  audioChallengeGameStarted(): void;
  sprintGameStarted(): void;
  drawChallenge(): void;
  gameOptionClicked: (level: number) => void;
};

export type GamesEventsType = {
  closeBtnClicked: () => void;
  sprintGameStarted: () => void;
  audioChallengeGameStarted: () => void;
  gameOptionClicked: (i: number) => void;
  getWordList: () => void;
  wordBtnClicked: (id: string) => void;
  nextBtnClicked: () => void;
  drawGameBtns: () => void;
  wordsAreOver: () => void;
};

export interface GamesEntranceControllerInterface {
  gamesEntranceView: GamesEntranceViewInterface;
  gamesEntranceModel: GamesEntranceModelInterface;
}

export interface AudioChallengeControllerInterface {
  audioChallengeView: AudioChallengeViewInterface;
  audioChallengeModel: AudioChallengeModelInterface;
}

export interface AudioChallengeModelInterface extends TypedEmitter<GamesEventsType> {
  wordsChunk: WordsChunkType[];
  getWordsList(query: string): void;
  getWordData(word: WordsChunkType): void;
  closeAudioChallengeGame(): void;
  turnGamePage(): void;
  changeSettingsPage(): void;
}

export interface AudioChallengeViewInterface extends TypedEmitter<GamesEventsType> {
  audioChallengeModel: AudioChallengeModelInterface;
  drawAudioChallengeGame(): void;
  createCloseBtn(): void;
  createWordsBtns({ id, wordTranslate, group }: WordBtnType): HTMLButtonElement;
  createAnswerWrapper(word: string): void;
}

export type WordBtnType = Pick<WordsChunkType, 'id' | 'wordTranslate' | 'group'>;

export type AudioChallengeGameType = {
  level: number;
  wordsPerPage: number;
  page: number;
  wordCount: number;
  soundingWordId: string;
};