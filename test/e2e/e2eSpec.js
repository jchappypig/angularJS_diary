describe('e2e: navigation', function () {
  'use strict';
  it('should greater than eight', function () {
    browser().navigateTo('/angularJS_diary/src/app/views/index.html');
//    expect(browser().location().path()).toBe(8);
//    expect(browser().window().href()).toBe(8);
    expect(browser().location().path()).toBe(8);
  });
});
