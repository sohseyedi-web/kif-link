import "../globals.css";
import SessionWrapper from "@/providers/SessionWrapper";
import QueryProviders from "@/providers/QueryClientWrapper";
import HeaderDashboard from "@/components/dashboard/HeaderDashboard";

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
            <section className="max-w-screen-xl mx-auto container py-12" dir="rtl">
              {/* <Sidebar /> */}
              <HeaderDashboard/>
              <main className="flex-1 my-5">{children}</main>
            </section>
          </QueryProviders>
        </SessionWrapper>
      </body>
    </html>
  );
}
