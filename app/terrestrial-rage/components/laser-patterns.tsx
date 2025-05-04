"use client";
import LaserOne from "./patterns/laser-one";
import LaserTwo from "./patterns/laser-two";
import LaserThree from "./patterns/laser-three";
import LaserFour from "./patterns/laser-four";
import { useRole } from "../role-context";

export default function LaserPatterns() {
  const { pattern, step } = useRole();

  return (
    <>
      {step === "step-one" && pattern && pattern.includes("1") && <LaserOne />}
      {step === "step-one" && pattern && pattern.includes("2") && <LaserTwo />}
      {step === "step-one" && pattern && pattern.includes("3") && (
        <LaserThree />
      )}
      {step === "step-one" && pattern && pattern.includes("4") && <LaserFour />}
    </>
  );
}
