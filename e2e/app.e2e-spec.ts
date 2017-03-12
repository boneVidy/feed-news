import { NewsFeedPage } from './app.po';

describe('news-feed App', () => {
  let page: NewsFeedPage;

  beforeEach(() => {
    page = new NewsFeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
