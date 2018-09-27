const { browser, element, by } = require('protractor');

describe('when navigating to github homepage', () => {
  it('then registration form should be displayed', () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://github.com');
    const signUpFormIsDisplayed = element(by.css(`.home-hero-signup`)).isDisplayed();
    expect(signUpFormIsDisplayed).toBe(true);
  });
});
