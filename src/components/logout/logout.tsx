"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export function Logout() {
  return (
    <DropdownMenuItem
      onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/`,
      })}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm text-white outline-none transition-colors focus:bg-primary focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Sair</span>
    </DropdownMenuItem>
  );
}
