"use client";
import { useRole } from "../role-context";

export default function PseudoHeader() {
  const { passCount, failCount } = useRole();
  return (
    <div className="flex p-8 justify-between bg-blue-50 rounded-3xl text-center my-8">
      <div className="w-1/10 flex flex-col justify-center bg-green-300 aspect-square rounded-3xl text-green-700 font-bold">
        <p className="text-wrap">Good Girl Points</p>
        <p className="text-2xl">{passCount}</p>
      </div>
      <div>
        <p className="text-4xl pb-4 font-semibold text-gray-600">
          Bumby Rage Time
        </p>
        <p className="text-gray-500 font-bold">M8S - Terrestrial Rage</p>
      </div>
      <div className="w-1/10 flex flex-col justify-center bg-red-300 aspect-square rounded-3xl text-red-700 font-bold">
        <p>Bad Boy Points</p>
        <p className="text-2xl">{failCount}</p>
      </div>
    </div>
  );
}
