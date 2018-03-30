import { DashBoardPage } from './app.po';

describe('dash-board App', () => {
  let page: DashBoardPage;

  beforeEach(() => {
    page = new DashBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
