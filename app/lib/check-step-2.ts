import { Role, Pattern, Step } from "../terrestrial-rage/role-context";
import { failedMechanic } from "./failedMechanic";
import { passedMechanic } from "./passedMechanic";
import { solutions } from "./solutions";

export interface CheckStepInterface {
  role: Role;
  pattern: Pattern;
  value: string;
  step: string;
  setStep: (step: Step) => void;
  incrementPass: () => void;
  incrementFail: () => void;
}

export function checkStep2({
  role,
  pattern,
  value,
  step,
  setStep,
  incrementPass,
  incrementFail,
}: CheckStepInterface) {
  const solution = solutions[pattern][role][step];

  if (value !== solution) {
    incrementFail();
    failedMechanic();
  } else {
    incrementPass();
    passedMechanic();
  }

  setStep("completed");
}
