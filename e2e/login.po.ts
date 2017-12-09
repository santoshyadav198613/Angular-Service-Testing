import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getParagraphText() {
    return element(by.css('app-login h1')).getText();
  }

  loginButton() {
    return element(by.tagName('button'));
  }
}
