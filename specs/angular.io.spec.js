const { browser, element, by } = require('protractor');

describe('beim besuchen der angular homepage', () => {
  it('muss ein button existieren der "GET STARTED" heißt', () => {
    browser.get('https://angular.io/');
    const buttonText = element(by.css('#intro > div.homepage-container > a')).getText();
    expect(buttonText).toEqual('GET STARTED');
  });
});
