import { useRole } from "../role-context";

export default function DangerComponents() {
  const { role, pattern } = useRole();
}
