const {searchProducts} = require('../service/product')

describe("searching prosucts", () => {
    test('returns all products in range', () => {
      expect(searchProducts(10,5000)).toStrictEqual([
        { "price": 506 },  { "price": 526 }, { "price": 965 },
        { "price": 1249 }, { "price": 18 }, { "price": 1003 },
        { "price": 225 },  { "price": 896 },  { "price": 542 },
        { "price": 1653 }, { "price": 1751 }, { "price": 1287 },
        { "price": 1585 }, { "price": 1441 }, { "price": 1536 },
        { "price": 2239 }, { "price": 2504 }, { "price": 2202 },
        { "price": 2199 }, { "price": 2244 }, { "price": 2502 },
        { "price": 2599 }, { "price": 3117 }, { "price": 2550 },
        { "price": 2981 }, { "price": 2741 }, { "price": 2653 },
        { "price": 2556 }, { "price": 2544 }, { "price": 3610 },
        { "price": 3652 }, { "price": 3687 }, { "price": 3714 },
        { "price": 3320 }, { "price": 3565 }, { "price": 3354 },
        { "price": 4142 }, { "price": 3978 }, { "price": 3924 },
        { "price": 4223 }, { "price": 3965 }, { "price": 4237 },
        { "price": 4122 }, { "price": 3821 }, { "price": 3891 },
        { "price": 3829 }, { "price": 4566 }, { "price": 4552 }
      ]);
    });

    test('fails to return results for non valid range', () => {
        expect(searchProducts(10,500000)).toBe("prices are between 0 and 100000")
      });
})