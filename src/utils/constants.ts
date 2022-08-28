import { AudioChallengeGameType } from '../types/gamesTypes';
import { UserSettingsType } from '../types/types';

export const baseURL = 'https://react-rslang-be-13.herokuapp.com/';
// 'https://react-rslang-be-13.herokuapp.com/';
// 'http://localhost:3001/';

export const MAX_TEXTBOOK_PAGES = 30;
export const DEFAULT_USER_SETTINGS: UserSettingsType = {
  userEmail: '',
  userName: 'Test user name',
  avatarURL: '',
  token: '',
  refreshToken: '',
  expireOn: 0,
  currPage: 0,
  currGroup: 0,
  currWord: '',
  userId: '',
};
export const DEFAULT_USER_NAME = 'default-user';

export const WORDS_PER_TEXTBOOK_PAGE = 20;

export const AUDIOCHALLENGE_GAME_SETTINGS: AudioChallengeGameType = {
  level: 0,
  wordsPerPage: 5,
  gamePage: 0,
  textbookPage: 0,
  wordCount: 0,
  soundingWordId: '',
  learnedWords: [],
  unlearnedWords: [],
  startFromTextbook: false,
  wordOfShakedArrCount: 0,
  shakedWordsArray: [],
};

export const STAR_SVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="star-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<path d="M54,5 86,105 1,43H107L22,105"/>
 </svg>`;

export const BIN_SVG = `<?xml version='1.0' encoding='iso-8859-1'?>
<svg class="bin-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 463 463">
  <path d="M375.5,48H295V31.5C295,14.131,280.869,0,263.5,0h-64C182.131,0,168,14.131,168,31.5V48H87.5C65.72,48,48,65.72,48,87.5v24  c0,4.142,3.357,7.5,7.5,7.5H64v288.5c0,10.336,6.71,19.128,16,22.266v9.734c0,12.958,10.542,23.5,23.5,23.5h256  c12.958,0,23.5-10.542,23.5-23.5v-9.734c9.29-3.138,16-11.93,16-22.266V119h8.5c4.143,0,7.5-3.358,7.5-7.5v-24  C415,65.72,397.28,48,375.5,48z M183,31.5c0-9.098,7.402-16.5,16.5-16.5h64c9.098,0,16.5,7.402,16.5,16.5V48h-97V31.5z M79,159.5  c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V416h-8.5c-4.687,0-8.5-3.813-8.5-8.5V159.5z M359.5,448h-256  c-4.687,0-8.5-3.813-8.5-8.5V431h273v8.5C368,444.187,364.187,448,359.5,448z M168,416h-17V159.5c0-4.687,3.813-8.5,8.5-8.5  s8.5,3.813,8.5,8.5V416z M240,416h-17V159.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V416z M312,416h-17V159.5  c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V416z M384,407.5c0,4.687-3.813,8.5-8.5,8.5H367V159.5c0-4.687,3.813-8.5,8.5-8.5  s8.5,3.813,8.5,8.5V407.5z M384,137.597c-2.638-1.027-5.503-1.597-8.5-1.597c-12.958,0-23.5,10.542-23.5,23.5V416h-25V159.5  c0-12.958-10.542-23.5-23.5-23.5S280,146.542,280,159.5V416h-25V159.5c0-12.958-10.542-23.5-23.5-23.5S208,146.542,208,159.5V416  h-25V159.5c0-12.958-10.542-23.5-23.5-23.5S136,146.542,136,159.5V416h-25V159.5c0-12.958-10.542-23.5-23.5-23.5  c-2.997,0-5.862,0.57-8.5,1.597V119h305V137.597z M400,104H63V87.5C63,73.991,73.99,63,87.5,63h288c13.51,0,24.5,10.991,24.5,24.5  V104z"/>
</svg>`;
