"use client";

import { useRole, Role, Pattern } from "../role-context";

const roles: Role[] = ["mt", "ot", "h1", "h2", "m1", "m2", "r1", "r2"];
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

export default function RoleSelector() {
  const { role, setRole, setPattern, setStep } = useRole();

  function randomizePattern() {
    const randomIndex = Math.floor(Math.random() * patterns.length);
    setPattern(patterns[randomIndex]);
    setStep("step-one");
  }

  return (
    <div className="flex justify-evenly my-4 text-white">
      {roles.map((roleName) => (
        <button
          key={roleName}
          onClick={() => {
            setRole(roleName);
            randomizePattern();
            document
              .querySelector("#role-select-error")
              ?.classList.add("hidden");
          }}
          className={`rounded-full ${
            roleName.includes("t")
              ? "bg-blue-600"
              : roleName.includes("h")
              ? "bg-green-600"
              : "bg-red-600"
          } p-3 cursor-pointer ${roleName === role && "brightness-75"}`}
        >
          {roleName.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
