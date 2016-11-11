import { MondoStudioPage } from './app.po';

describe('mondo-studio App', function() {
  let page: MondoStudioPage;

  beforeEach(() => {
    page = new MondoStudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
