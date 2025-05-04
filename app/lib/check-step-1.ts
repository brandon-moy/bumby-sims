import { Role, Pattern, Step } from "../terrestrial-rage/role-context";
import { solutions } from "./solutions";
import { failedMechanic } from "./failedMechanic";

interface CheckStepInterface {
  role: Role;
  pattern: Pattern;
  value: string;
  step: string;
  setStep: (step: Step) => void;
  incrementFail: () => void;
}

export function checkStep1({
  role,
  pattern,
  value,
  step,
  setStep,
  incrementFail,
}: CheckStepInterface) {
  const solution = solutions[pattern][role][step];

  if (value !== solution) {
    incrementFail();
    failedMechanic();
  }

  setStep("step-two");
}
