define([
], function () {
  'use strict';
  describe('unit test: CalculationController', function () {
    describe('add function', function () {
      it('should greater than eight', function () {
        var value = 9;
        expect(value).toBeGreaterThan(8);
      });
    });
  });
});