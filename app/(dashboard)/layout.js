import "../globals.css";
import SessionWrapper from "@/providers/SessionWrapper";
import QueryProviders from "@/providers/QueryClientWrapper";
import Sidebar from "@/components/dashboard/Sidebar";

export const metadata = {
  title: "KifLink",
  description: "One Link - One World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <QueryProviders>
            <section className="max-w-screen-xl mx-auto container flex gap-x-3 py-12" dir="rtl">
              <Sidebar />
              <main className="flex-1">{children}</main>
            </section>
          </QueryProviders>
        </SessionWrapper>
      </body>
    </html>
  );
}
