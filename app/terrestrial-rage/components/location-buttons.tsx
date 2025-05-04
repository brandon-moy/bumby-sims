"use client";
import { useRole } from "../role-context";
import { checkStep1 } from "@/app/lib/check-step-1";
import { checkStep2 } from "@/app/lib/check-step-2";

export default function LocationButtons() {
  const { role, pattern, step, setStep, incrementPass, incrementFail } =
    useRole();

  function triggerLocationCheck(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement) || !step || !pattern) return;
    if (!role) {
      document.querySelector("#role-select-error")?.classList.remove("hidden");
      return;
    }

    const value = target.value;

    if (step === "step-one") {
      checkStep1({ role, pattern, value, step, setStep, incrementFail });
    } else if (step === "step-two") {
      checkStep2({
        role,
        pattern,
        value,
        step,
        setStep,
        incrementPass,
        incrementFail,
      });
    }
  }

  return (
    <div
      className="inset-0 absolute z-20"
      onClick={(event) => triggerLocationCheck(event)}
    >
      <button
        value="a"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute left-1/2 -translate-x-1/2 top-25 cursor-pointer"
      />
      <button
        value="a1"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute right-1/3 -translate-x-1/4 top-30 cursor-pointer"
      />
      <button
        value="1"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square cursor-pointer right-1/4 top-1/4 absolute"
      />
      <button
        value="1b"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute right-1/6 -translate-x-1/2 top-58 cursor-pointer"
      />
      <button
        value="b"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square top-1/2 -translate-y-1/2 absolute right-1/6 cursor-pointer"
      />
      <button
        value="b2"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute right-1/6 -translate-x-1/2 bottom-58 cursor-pointer"
      />
      <button
        value="2"
        className="rounded-full border-2 border-green-500 w-[20px] right-1/4 bottom-1/4 absolute aspect-square cursor-pointer"
      />
      <button
        value="2c"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute right-1/3 -translate-x-1/4 bottom-30 cursor-pointer"
      />
      <button
        value="c"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square left-1/2 -translate-x-1/2 bottom-25 cursor-pointer absolute"
      />
      <button
        value="c3"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute left-1/3 bottom-30 cursor-pointer"
      />
      <button
        value="3"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute left-1/4 bottom-1/4 cursor-pointer"
      />
      <button
        value="3d"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute left-2/11 bottom-58 cursor-pointer"
      />
      <button
        value="d"
        className="rounded-full border-2 border-green-500 w-[20px] top-1/2 -translate-y-1/2 absolute left-1/6 aspect-square cursor-pointer"
      />
      <button
        value="d4"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute left-1/5 -translate-x-1/2 top-58 cursor-pointer"
      />
      <button
        value="4"
        className="rounded-full border-2 border-green-500 w-[20px] top-1/4 left-1/4 absolute aspect-square cursor-pointer"
      />
      <button
        value="a1"
        className="rounded-full border-2 border-green-500 w-[20px] aspect-square absolute left-2/6 top-30 cursor-pointer"
      />
      <button
        value="s1"
        className="rounded-full border-2 border-green-500 w-[20px] top-2/5 right-2/5 absolute aspect-square cursor-pointer"
      />
      <button
        value="s2"
        className="rounded-full border-2 border-green-500 w-[20px] bottom-2/5 right-2/5 absolute aspect-square cursor-pointer"
      />
      <button
        value="s3"
        className="rounded-full border-2 border-green-500 w-[20px] bottom-2/5 left-2/5 absolute aspect-square cursor-pointer"
      />
      <button
        value="s4"
        className="rounded-full border-2 border-green-500 w-[20px] top-2/5 left-2/5 absolute aspect-square cursor-pointer"
      />
    </div>
  );
}
