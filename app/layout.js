import "./globals.css";
import { SessionProvider } from "next-auth/react";
import QueryProviders from "@/providers/QueryClientWrapper";

export const metadata = {
  title: "KifLink",
  description: "One Link - One World",
};

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <QueryProviders>{children}</QueryProviders>
        </body>
      </html>
    </SessionProvider>
  );
}
