const { browser, element, by } = require('protractor');

describe('when navigating to angular homepage', () => {
  it('there should be a button called "GET STARTED"', () => {
    browser.get('https://angular.io/');
    const buttonText = element(by.css('#intro > div.homepage-container > a')).getText();
    expect(buttonText).toEqual('GET STARTED');
  });
});
