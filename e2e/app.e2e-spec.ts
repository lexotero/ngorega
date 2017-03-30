import { OregaPage } from './app.po';

describe('orega App', function() {
  let page: OregaPage;

  beforeEach(() => {
    page = new OregaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
