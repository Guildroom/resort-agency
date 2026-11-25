"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageOffset({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/") return <>{children}</>;

  return <div className="pt-[88px] md:pt-[112px]">{children}</div>;
}
