'use strict';

var Jest  = require("../src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");

Jest.test("test", (function () {
        return Curry._2(Jest.Expect[/* toBe */2], 3, Curry._1(Jest.Expect[/* expect */0], 3));
      }));

Jest.testAsync("testAsync", (function (done_) {
        return Curry._1(done_, Curry._2(Jest.Expect[/* toBe */2], 3, Curry._1(Jest.Expect[/* expect */0], 3)));
      }));

Jest.testPromise("testPromise", (function () {
        return Promise.resolve(Curry._2(Jest.Expect[/* toBe */2], 3, Curry._1(Jest.Expect[/* expect */0], 3)));
      }));

describe("describe", (function () {
        return Jest.test("some aspect", (function () {
                      return Curry._2(Jest.Expect[/* toBe */2], 3, Curry._1(Jest.Expect[/* expect */0], 3));
                    }));
      }));

describe("beforeAll", (function () {
        var x = [0];
        beforeAll((function () {
                x[0] = x[0] + 4 | 0;
                return /* () */0;
              }));
        Jest.test("x is 4", (function () {
                return Curry._2(Jest.Expect[/* toBe */2], 4, Curry._1(Jest.Expect[/* expect */0], x[0]));
              }));
        return Jest.test("x is still 4", (function () {
                      return Curry._2(Jest.Expect[/* toBe */2], 4, Curry._1(Jest.Expect[/* expect */0], x[0]));
                    }));
      }));

describe("beforeEach", (function () {
        var x = [0];
        beforeEach((function () {
                x[0] = x[0] + 4 | 0;
                return /* () */0;
              }));
        Jest.test("x is 4", (function () {
                return Curry._2(Jest.Expect[/* toBe */2], 4, Curry._1(Jest.Expect[/* expect */0], x[0]));
              }));
        return Jest.test("x is suddenly 8", (function () {
                      return Curry._2(Jest.Expect[/* toBe */2], 8, Curry._1(Jest.Expect[/* expect */0], x[0]));
                    }));
      }));

describe("afterAll", (function () {
        var x = [0];
        describe("phase 1", (function () {
                afterAll((function () {
                        x[0] = x[0] + 4 | 0;
                        return /* () */0;
                      }));
                return Jest.test("x is 0", (function () {
                              return Curry._2(Jest.Expect[/* toBe */2], 0, Curry._1(Jest.Expect[/* expect */0], x[0]));
                            }));
              }));
        describe("phase 2", (function () {
                return Jest.test("x is suddenly 4", (function () {
                              return Curry._2(Jest.Expect[/* toBe */2], 4, Curry._1(Jest.Expect[/* expect */0], x[0]));
                            }));
              }));
        return /* () */0;
      }));

describe("afterEach", (function () {
        var x = [0];
        afterEach((function () {
                x[0] = x[0] + 4 | 0;
                return /* () */0;
              }));
        Jest.test("x is 0", (function () {
                return Curry._2(Jest.Expect[/* toBe */2], 0, Curry._1(Jest.Expect[/* expect */0], x[0]));
              }));
        return Jest.test("x is suddenly 4", (function () {
                      return Curry._2(Jest.Expect[/* toBe */2], 4, Curry._1(Jest.Expect[/* expect */0], x[0]));
                    }));
      }));

describe("Only", (function () {
        return /* () */0;
      }));

describe("Skip", (function () {
        test.skip("Skip.test", (function () {
                return Curry._2(Jest.Expect[/* toBe */2], 3, Curry._1(Jest.Expect[/* expect */0], 3));
              }));
        test.skip("Skip.testAsync", (function (done_) {
                return Curry._1(done_, Curry._2(Jest.Expect[/* toBe */2], 3, Curry._1(Jest.Expect[/* expect */0], 3)));
              }));
        test.skip("Skip.testPromise", (function () {
                return Promise.resolve(Curry._2(Jest.Expect[/* toBe */2], 3, Curry._1(Jest.Expect[/* expect */0], 3)));
              }));
        describe.skip("Skip.describe", (function () {
                return Jest.test("some aspect", (function () {
                              return Curry._2(Jest.Expect[/* toBe */2], 3, Curry._1(Jest.Expect[/* expect */0], 3));
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */
