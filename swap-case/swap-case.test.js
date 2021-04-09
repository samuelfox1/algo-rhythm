const { describe, expect, it } = require('@jest/globals')
const swapCase = require('./swap-case')

describe("swapCase", function () {
  it("should return `tHE pRICE `OF gREATNESS iS rESPONSIBILITY` when given `The Price of Greatness Is Responsibility`", function () {
    const str = "The Price of Greatness Is Responsibility";

    const result = swapCase(str);

    expect(result).toBe("tHE pRICE OF gREATNESS iS rESPONSIBILITY");
  });

  it("should return `iMaGiNe iF I wRoTe lIkE ThIs` when given `ImAgInE If i WrOtE LiKe tHiS`", function () {
    const str = "ImAgInE If i WrOtE LiKe tHiS";

    const result = swapCase(str);

    expect(result).toBe("iMaGiNe iF I wRoTe lIkE ThIs");
  });
});
