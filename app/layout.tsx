import Navbar from "@/components/navbar/Navbar";
import Provider from "./Provider";
import "./globals.css";

export const metadata = {
  title: "Notion Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" dark">
      <body>
        <Provider>
          <Navbar />
          <div className="">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
