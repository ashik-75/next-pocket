"use client";
import { ThemeProvider } from "next-themes";

function Providers({ children }: any) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
