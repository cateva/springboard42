const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
});

describe("#spiral", function () {

    it("is a spiral function, example 1", function () {
      let matrix = [[ 1, 2, 3, 4 ],[ 5, 6, 7, 8 ],
      [ 9, 10, 11, 12 ],[ 13, 14, 15, 16 ]];
      expect(unroll(matrix)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    });

    it("is a spiral function, example 2", function () {
      let matrix = [
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"]
      ];
      expect(unroll(matrix)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
    });

    it("returns empty array", function () {
      let matrix = [];
      expect(unroll(matrix)).toEqual([]);
    });
  });
