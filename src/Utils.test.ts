import { updateFXList } from "./Utils";
import { FXObject } from "./Service";

describe("Utils", () => {
  describe("updateFXList", () => {
    it("should replace old data with the new data", () => {
      const testList = [
        { from: "GBP", rate: 1.27481, reverseRate: 0.79491, to: "CHF" },
        { from: "EUR", rate: 1.27481, reverseRate: 0.79491, to: "USD" },
      ];
      const testNewData = {
        from: "GBP",
        rate: 1.5,
        reverseRate: 0.5,
        to: "CHF",
      };

      const result = updateFXList(testList as [FXObject], testNewData);
      expect(
        result.find(
          (item) => item.from === testNewData.from && item.to === testNewData.to
        )
      ).toEqual(testNewData);
    });
  });
});

//to remove the '--isolatedModules' error.
export {};
