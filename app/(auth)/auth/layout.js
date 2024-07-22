import "../../globals.css";
import SessionWrapper from "@/providers/SessionWrapper";
import QueryProviders from "@/providers/QueryClientWrapper";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "KifLink - Login/Register",
  description: "One Link - One World",
};

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <SessionWrapper>
            <QueryProviders>{children}</QueryProviders>
          </SessionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
