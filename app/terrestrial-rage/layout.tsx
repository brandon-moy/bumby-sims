import { ReactNode } from "react";
import { RoleProvider } from "./role-context";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terrestrial Rage",
  description: "Terrestrial Rage Sim by Bumby",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <RoleProvider>{children}</RoleProvider>;
}
