import { browser, element, by } from 'protractor';

export class TamperejsNg2routerDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
