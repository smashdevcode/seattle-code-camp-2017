import { Angular2DecoratorsPage } from './app.po';

describe('angular2-decorators App', () => {
  let page: Angular2DecoratorsPage;

  beforeEach(() => {
    page = new Angular2DecoratorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
