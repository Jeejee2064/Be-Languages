"use client";

import { usePathname } from "next/navigation";

export default function LocaleProvider({ children }) {
  const pathname = usePathname();
  const locale = pathname.startsWith("/es") ? "es" : "en";

  return <html lang={locale}>{children}</html>;
}
