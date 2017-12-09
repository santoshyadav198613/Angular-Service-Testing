import { LoginPage } from './login.po';

describe('testingdemo App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display  message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login Form');
  });

  it('should have login button', () => {
    page.navigateTo();
    console.log(page.loginButton());
  });
});
