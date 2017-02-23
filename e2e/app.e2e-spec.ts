import { MyapptestPage } from './app.po';

describe('myapptest App', function() {
  let page: MyapptestPage;

  beforeEach(() => {
    page = new MyapptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
