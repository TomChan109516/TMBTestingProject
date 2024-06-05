import { render } from "@testing-library/react";
import HeadLampLayoutTable from "../HeadLampLayoutTable";
import React from "react";

describe("HeadLampLayoutTable", () => {
  it("renders without crashing", () => {
    const headTestData = [
      {
        LeftMainIntensity: "test",
        LeftDippedIntensity: "test",
        LeftMainVOffset: "test",
        LeftDippedVOffset: "test",
        LeftMainHOffset: "test",
        LeftDippedHOffset: "test",
        LeftMainHeight: "test",
        LeftDippedHeight: "test",
        LeftDippedUpwardAngle: "test",
        LeftDippedHorizontAlAngle: "test",
        RightMainIntensity: "test",
        RightDippedIntensity: "test",
        RightMainVOffset: "test",
        RightDippedVOffset: "test",
        RightMainHOffset: "test",
        RightDippedHOffset: "test",
        RightMainHeight: "test",
        RightDippedHeight: "test",
        RightDippedUpwardAngle: "test",
        RightDippedHorizontAlAngle: "test",
      },
    ];
    const submitted = "No";
    const needInspection = "No";

    render(
      <HeadLampLayoutTable
        headTestData={headTestData}
        submitted={submitted}
        needInspection={needInspection}
      />
    );
  });
});
