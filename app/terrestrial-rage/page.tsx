import RoleSelector from "./components/role-selector";
import Arena from "./components/arena";
import PseudoHeader from "./components/pseudo-header";
import Messages from "./components/messages";
import "./styles.css";

export default function TerrestrialRage() {
  return (
    <div className="flex justify-center w-3/5 mx-auto transition-all pb-40">
      <div className="w-full">
        <PseudoHeader />
        <div className="mx-auto flex justify-center bg-blue-50 rounded-3xl">
          <div className="my-4 text-black">
            <p>Do it right, be a good girl. Do it wrong, be a bad boy.</p>
            <p>Select your Role:</p>
            <p id="role-select-error" className="hidden text-red-500 font-bold">
              Please select a role first
            </p>
            <RoleSelector />
            <Messages />
            <Arena />
          </div>
        </div>
      </div>
    </div>
  );
}
