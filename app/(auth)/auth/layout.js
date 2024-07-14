import "../../globals.css";
import SessionWrapper from "@/providers/SessionWrapper";
import QueryProviders from "@/providers/QueryClientWrapper";

export const metadata = {
  title: "KifLink - Login/Register",
  description: "One Link - One World",
};

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <QueryProviders>{children}</QueryProviders>
        </SessionWrapper>
      </body>
    </html>
  );
}
