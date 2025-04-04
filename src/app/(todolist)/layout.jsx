
import Logo from "@/components/logo";
import Sidebar from "./_components/Sidebar";
import { AddTaskComponent } from "@/taks/_components/AddTaskComponent";
import NavbarBar from "./_components/Navbar";
export default function AuthenticationLayout({ children }) {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar Section */}
        <div className="w-64 flex-shrink-0">
          <Logo />
          <Sidebar />
        </div>
        {/* Main Content Section */}
        <div className="flex flex-col flex-grow px-6">
          <main>{children}</main>
         <AddTaskComponent/>
        </div>
      </div>
    </>
  );
}
