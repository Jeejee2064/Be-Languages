"use client";

import { usePathname } from "next/navigation";

// Single <html> for the whole app, with lang matching the URL (/es/* is Spanish)
export default function LocaleHtml({ children }) {
  const pathname = usePathname() || "/";
  const lang = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

  return <html lang={lang}>{children}</html>;
}
