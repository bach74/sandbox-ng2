import { NgprimeTablePage } from './app.po';

describe('ngprime-table App', function() {
  let page: NgprimeTablePage;

  beforeEach(() => {
    page = new NgprimeTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
