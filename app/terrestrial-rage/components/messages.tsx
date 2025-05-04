"use client";
import { useRole, Pattern } from "../role-context";

export const patterns: Pattern[] = [
  "1-ss-card",
  "1-ss-inter",
  "1-ds-card",
  "1-ds-inter",
  "2-ss-card",
  "2-ss-inter",
  "2-ds-card",
  "2-ds-inter",
  "3-ss-card",
  "3-ss-inter",
  "3-ds-card",
  "3-ds-inter",
  "4-ss-card",
  "4-ss-inter",
  "4-ds-card",
  "4-ds-inter",
];

export default function Messages() {
  const { pattern, step, role, setPattern, setStep } = useRole();

  function randomizePattern() {
    const randomIndex = Math.floor(Math.random() * patterns.length);
    setPattern(patterns[randomIndex]);
    setStep("step-one");
  }

  if (!pattern || !step || !role) return;

  const supportRoles = ["mt", "ot", "h1", "h2"];
  const dpsRoles = ["m1", "m2", "m3", "m4"];

  const currentRole = supportRoles.includes(role) ? "Support" : "DPS";
  const stepOneMarker = pattern.includes("ss")
    ? currentRole === "Support"
      ? "STACK"
      : "SPREAD"
    : pattern.includes("ds")
    ? currentRole === "DPS"
      ? "STACK"
      : "SPREAD"
    : null;

  const stepTwoMarker = stepOneMarker === "STACK" ? "SPREAD" : "STACK";

  const color =
    stepOneMarker === "STACK" ? "text-orange-500" : "text-purple-500";

  const color2 =
    stepTwoMarker === "STACK" ? "text-orange-500" : "text-purple-500";

  return (
    <div className="rounded-3xl bg-blue-100 p-4 my-4">
      {step === "step-one" && (
        <p>
          The lasers have dropped and {currentRole} have a{" "}
          <span className={`font-bold ${color}`}>{stepOneMarker}</span> marker.
          Where should you go?
        </p>
      )}
      {step === "step-two" && (
        <p>
          The clones have spawned now and {currentRole} have a{" "}
          <span className={`font-bold ${color2}`}>{stepTwoMarker}</span> marker.
          Where should you go?
        </p>
      )}
      {step === "completed" && (
        <p>
          [insert something witty here]{" "}
          <button className="underline" onClick={(e) => randomizePattern()}>
            Run it back!
          </button>
        </p>
      )}
    </div>
  );
}
