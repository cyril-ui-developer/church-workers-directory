import { ChucrchWorkersDirectoryPage } from './app.po';

describe('chucrch-workers-directory App', function() {
  let page: ChucrchWorkersDirectoryPage;

  beforeEach(() => {
    page = new ChucrchWorkersDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
