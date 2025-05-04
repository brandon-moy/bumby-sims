"use client";
import CardinalClones from "./patterns/clones-card";
import InterClones from "./patterns/clones-inter";
import { useRole } from "../role-context";
export default function ClonePatterns() {
  const { pattern, step } = useRole();

  return (
    <>
      {step === "step-two" && pattern && pattern.includes("card") && (
        <CardinalClones />
      )}
      {step === "step-two" && pattern && pattern.includes("inter") && (
        <InterClones />
      )}
    </>
  );
}
