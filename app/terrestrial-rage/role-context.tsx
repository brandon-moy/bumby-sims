"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "mt" | "ot" | "h1" | "h2" | "m1" | "m2" | "r1" | "r2";
// Number: where laser is closest to
// ss = support stack, ds = dps stack
// c = cardinal, ic = intercardinal for clones
export type Pattern =
  | "1-ss-card"
  | "1-ss-inter"
  | "1-ds-card"
  | "1-ds-inter"
  | "2-ss-card"
  | "2-ss-inter"
  | "2-ds-card"
  | "2-ds-inter"
  | "3-ss-card"
  | "3-ss-inter"
  | "3-ds-card"
  | "3-ds-inter"
  | "4-ss-card"
  | "4-ss-inter"
  | "4-ds-card"
  | "4-ds-inter";

export type Step = "step-one" | "step-two" | "completed";

interface RoleContextType {
  role: Role | null;
  setRole: (role: Role) => void;
  passCount: number;
  failCount: number;
  pattern: Pattern | null;
  setPattern: (pattern: Pattern) => void;
  step: string | null;
  setStep: (step: Step) => void;
  incrementPass: () => void;
  incrementFail: () => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role | null>(null);
  const [passCount, setPassCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [step, setStep] = useState<Step | null>(null);

  const incrementPass = () => setPassCount((prev) => prev + 1);
  const incrementFail = () => setFailCount((prev) => prev + 1);

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        pattern,
        setPattern,
        step,
        setStep,
        passCount,
        failCount,
        incrementPass,
        incrementFail,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = (): RoleContextType => {
  const context = useContext(RoleContext);
  if (!context) throw new Error("useRole must be used within a RoleProvider");
  return context;
};
