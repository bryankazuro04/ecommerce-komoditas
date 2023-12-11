import "@/app/ui/globals.css";
import Sidebar from "@/app/ui/dashboard/sidebar";
import HeadNav from "@/app/ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen flex-col sm:flex-row sm:overflow-hidden">
        <div className="flex h-screen flex-col sm:flex-row">
          <div className="w-full flex-none sm:w-64">
            <Sidebar />
          </div>
        </div>

        <div className="flex-grow px-6 sm:overflow-y-auto sm:px-12">
          <header className="w-full bg-slate-900 rounded-lg my-5 py-4">
            <HeadNav />
          </header>

          <main className="pb-6">{children}</main>
        </div>
      </div>
    </>
  );
}
