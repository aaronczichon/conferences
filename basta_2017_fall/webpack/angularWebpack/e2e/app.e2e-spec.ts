import { AngularWebpackPage } from './app.po';

describe('angular-webpack App', () => {
  let page: AngularWebpackPage;

  beforeEach(() => {
    page = new AngularWebpackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
