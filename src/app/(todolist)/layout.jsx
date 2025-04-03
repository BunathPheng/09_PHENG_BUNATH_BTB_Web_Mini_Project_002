
import Logo from "@/components/logo";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import { ThemeModeScript } from 'flowbite-react';
export default function AuthenticationLayout({ children }) {
  return (
    <>
      <head>
        <ThemeModeScript />
      </head>
      <div className="flex min-h-screen">
        {/* Sidebar Section */}
        <div className="w-64 flex-shrink-0">
          <Logo />
          <Sidebar />
        </div>
        {/* Main Content Section */}
        <div className="flex flex-col flex-grow px-6">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
