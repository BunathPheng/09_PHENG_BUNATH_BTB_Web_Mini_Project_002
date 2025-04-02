import "../globals.css";
import Logo from "@/components/logo";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};




export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <div className="flex min-h-screen">
          {/* Sidebar Section */}
          <div className="w-64 flex-shrink-0">
            <Logo />
            <Sidebar />
          </div>
          {/* Main Content Section */}
          <div className="flex flex-col flex-grow px-6">
            <Navbar />  
            <main className="grid grid-cols-3 gap-10">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
