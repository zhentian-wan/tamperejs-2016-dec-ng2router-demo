import { TamperejsNg2routerDemoPage } from './app.po';

describe('tamperejs-ng2router-demo App', function() {
  let page: TamperejsNg2routerDemoPage;

  beforeEach(() => {
    page = new TamperejsNg2routerDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
