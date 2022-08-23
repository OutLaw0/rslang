import LoginView from './loginView';
import { showModal } from '../../utils/tools';
import { createUser, loginUser } from '../../model/api/usersApi';
import { UserSuccessLoginType, CreateUserResponseType } from '../../types/userTypes';
import { LocalStorage } from '../../utils/storage';
import { UserSettingsType } from '../../types/types';
import history from '../../index';
import Nav from '../../components/nav';
import { getElement } from '../../utils/tools';

class Login {
  view: LoginView;

  constructor() {
    this.view = new LoginView(this.loginHandler, this.authHandler);
  }

  loginHandler = async (form: HTMLFormElement) => {
    const email = (form['email'] as HTMLInputElement).value;
    const password = (form['pass'] as HTMLInputElement).value;
    if (email.length === 0) showModal('Введите почту!');
    else if (password.length < 8) showModal('Пароль более 8 символов!');
    else {
      const userData = {
        email: email,
        password: password,
      };
      const response = (await loginUser(userData)) as [number, UserSuccessLoginType];
      if (response[0] === 200) {
        showModal('Успешная авторизация!');

        const { token, refreshToken, userId, name } = response[1];
        const loginUserSettings: UserSettingsType = {
          userEmail: userData.email,
          userName: name,
          avatarURL: '',
          token: token,
          refreshToken: refreshToken,
          currPage: LocalStorage.currUserSettings.currPage,
          currGroup: LocalStorage.currUserSettings.currGroup,
          currWord: LocalStorage.currUserSettings.currWord,
          userId: userId,
        };
        LocalStorage.currUserSettings = loginUserSettings;
        LocalStorage.setLSData(LocalStorage.currUserID, loginUserSettings);
        history.push('/');
        new Nav(getElement('header') as HTMLElement).render();
      } else showModal('Неверный логин или пароль!');
    }
  };

  authHandler = async (form: HTMLFormElement) => {
    const name = (form['login'] as HTMLInputElement).value;
    const email = (form['email'] as HTMLInputElement).value;
    const password = (form['pass'] as HTMLInputElement).value;
    if (email.length === 0) showModal('Введите почту!');
    else if (password.length < 8) showModal('Пароль более 8 символов!');
    else {
      const userData = {
        name: name,
        email: email,
        password: password,
      };
      const response = (await createUser(userData)) as [number, CreateUserResponseType];
      if (response[0] === 200) {
        showModal('Успешная регистрация!');
        history.push('/login');
      } else showModal(response[1].error.errors[0].message);
    }
  };
}

export default Login;
