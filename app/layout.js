import "./globals.css";
import SessionWrapper from "@/providers/SessionWrapper";
import QueryProviders from "@/providers/QueryClientWrapper";

export const metadata = {
  title: "KifLink",
  description: "One Link - One World",
};

export default function RootLayout({ children }) {
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
