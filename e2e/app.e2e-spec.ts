import { AppPage } from './app.po';

describe('testingdemo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Test App!');
  });

  it('should have login component', () => {
    page.navigateTo();
    console.log(page.getLogin());
    expect(page.getLogin()).toEqual('Login Form');
  });
});
