import { MondoStudioPage } from './app.po';

describe('mondo-studio App', function() {
  let page: MondoStudioPage;

  beforeEach(() => {
    page = new MondoStudioPage();
  });

  it(`should display toolbar with heading saying 'MondoStudio'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('MondoStudio');
  });
});
