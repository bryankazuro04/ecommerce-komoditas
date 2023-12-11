import Link from "next/link";
import Divider from "@mui/material/Divider";
import Navlink from "@/app/ui/dashboard/nav-link";

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col px-3 py-4 md:px-7 bg-slate-400 dark:bg-slate-900 rounded-b-lg sm:rounded-r-2xl">
      <h1 className="text-3xl font-bold mb-5">Logo</h1>
      <Divider className="border-2 border-slate-600" />
      {/* <Link href={"/"}>Test</Link> */}
      <nav className="mt-4 sm:flex grow flex-row gap-2 space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2 hidden">
        <Navlink />
      </nav>
    </aside>
  );
}
