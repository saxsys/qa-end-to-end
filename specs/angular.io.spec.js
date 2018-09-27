const { browser, element, by } = require('protractor');

describe('when navigating to angular homepage', () => {
  it('there should be a button called "GET STARTED"', () => {
    browser.get('https://angular.io/');
    const buttonText = element(by.css('#intro > div.homepage-container > a')).getText();
    expect(buttonText).toEqual('GET STARTED');
  });
});

describe('when navigating to github homepage', () => {
  it('then registration form should be displayed', () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://github.com');
    const signUpFormIsDisplayed = element(by.css(`.home-hero-signup`)).isDisplayed();
    expect(signUpFormIsDisplayed).toBe(true);
  });
});
