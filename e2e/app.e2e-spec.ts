import { AngularTricksPage } from './app.po';

describe('angular-tricks App', () => {
  let page: AngularTricksPage;

  beforeEach(() => {
    page = new AngularTricksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
