import { TestHeroesPage } from './app.po';

describe('test-heroes App', () => {
  let page: TestHeroesPage;

  beforeEach(() => {
    page = new TestHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
